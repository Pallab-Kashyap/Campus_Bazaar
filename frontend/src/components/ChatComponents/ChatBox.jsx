import React, { useEffect, useState } from "react";
import { useCurrUserDtl } from "../../context/chatConext";
import '../../pages/Chat/ChatInterface.css'

function ChatBox({ chatBox, handleClick }) {

  const { currUser } = useCurrUserDtl();
  const messageTo =
    chatBox.user_1 === currUser ? chatBox.user_2 : chatBox.user_1;
  let unseenMsg;
  if (chatBox.unseen_for === currUser) {
    if (chatBox.unseen_msg_count > 0) unseenMsg = chatBox.unseen_msg_count;
  }
  const chatBoxDtl = {
    chatBoxId: chatBox.chat_box_id,
    currUser: currUser,
    receverId: messageTo,
  };

  return (
    <div
      onClick={() => handleClick(chatBoxDtl)}
      className="chatBox my-1 h-fit p-4 text-white flex"
    >
      <div className="chatProfilePicture h-14 w-14 mr-3 bg-slate-50 "></div>
      <div className="w-[75%] px-2">
        <div className="text-xl">
         <p className="mb-1">{messageTo}</p>
        </div>
        <div className="text-sm text-slate-300 overflow-hidden">
          {chatBox.last_msg}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {unseenMsg && (
          <div className="unseenCount h-6 w-6 mr-2 rounded-full flex items-center justify-center">
            <span className="text-xs">{unseenMsg}</span>
          </div>
        )} 
      </div>
    </div>
  );
}

export default ChatBox;
