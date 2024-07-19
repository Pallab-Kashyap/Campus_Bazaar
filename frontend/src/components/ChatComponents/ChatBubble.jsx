import React from "react";
import { useCurrUserDtl } from "../../context/chatConext";
import "../../pages/Chat/ChatInterface.css";

function ChatBubble({ msg, sender }) {
  const { currUser } = useCurrUserDtl();
  let side = sender === currUser ? "self-end myMsg" : "self_start";
  return (
    <div className={`chatBubble m-2 text-lg h-fit px-4 py-2 w-fit max-w-4xl break-words whitespace-normal rounded-2xl ${side}`}>
      {msg}
    </div>
  );
}

export default ChatBubble;
