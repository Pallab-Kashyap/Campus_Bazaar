import React, { useEffect, useState } from "react";
import { useCurrUserDtl } from "../../context/chatConext";

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
      className="chatBox my-1 h-fit w-full text-white flex"
    >
      <div className="w-[90%] px-2 py-1">
        <div className="text-xl">{messageTo}</div>
        <div className="text-sm text-slate-300 overflow-hidden">
          {chatBox.last_msg}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {unseenMsg && (
          <div className="h-5 w-5 mr-5 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-xs">{unseenMsg}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBox;
