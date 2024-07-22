import React, { useEffect, useState } from "react";
import { ChatBox, ChatScreen, Search } from "../../components/ChatComponents";
import { CurrUserDtlProvider } from "../../context/chatConext";
import { getChatBoxes, getChat, markAsSeen } from "../../utils/supabase/supaOperations";
import supabase from "../../utils/supabase/supabase";
import './ChatInterface.css'

function ChatInterface() {
  supabase
    .channel("messages")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      (payload) => {
        const data = payload.new;
        const newChat = [data, ...chats];
        setChats(newChat);
      }
    )
    .subscribe();

    supabase
    .channel('chat_box')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_box' }, (payload) => {
      const updatedData = payload.new;
      let newChatBox = chatBoxes.filter((chatBox) => (updatedData.chat_box_id != chatBox.chat_box_id));
      newChatBox = [updatedData, ...newChatBox]
      setChatBoxes(newChatBox);
      console.log('chat box trigger');
    })
    .subscribe();

  const [chatDisplay, setChatDisplay] = useState(0);
  const [chats, setChats] = useState([]);
  const [chatInfo, setChatInfo] = useState([]);
  const [chatBoxes, setChatBoxes] = useState([]);
  const [currUser, setUserName] = useState("");
  const [val, setVal] = useState("");

  useEffect(() => {}, [chatBoxes])

  const handleLogin = async () => {
    setUserName(val);
    const res = await getChatBoxes(val);
    setChatBoxes(res);
    setVal("");
  };

  const handleClickChatBox = async (chatBoxDtl) => {
    let res = await getChat(chatBoxDtl.chatBoxId);
    setChatInfo(chatBoxDtl);
    setChats(res);
    markAsSeen(chatBoxDtl);
    setChatDisplay((prev) => (prev) ? 0 : 1)
  };

  return (
    <CurrUserDtlProvider
      value={{ currUser, setUserName, chatDisplay, setChatDisplay }}
    >
      <div className="chatInterface h-full w-full flex">
        <div className="chatBoxContainer w-full md:w-2/6 h-full overflow-y-scroll">
          <div>
            <input
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <button className="px-1 bg-teal-400" onClick={handleLogin}>
              login
            </button>
          </div>
          <Search />
          {chatBoxes.map((chatBox) => (
            <ChatBox
              key={chatBox.chat_box_id}
              chatBox={chatBox}
              handleClick={handleClickChatBox}
            />
          ))}
        </div>
        <div className="chatContainer hidden md:block md:w-3/4  h-full ">
          <ChatScreen chats={chats}  chatInfo={chatInfo}/>
        </div>
      </div>
    </CurrUserDtlProvider>
  );
}

export default ChatInterface;
