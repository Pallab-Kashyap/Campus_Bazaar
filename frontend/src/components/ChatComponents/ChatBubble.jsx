import React from "react";
import { useUserContext } from "../../context/userContext";
import "../../pages/Chat/ChatInterface.css";

function ChatBubble({ msg, sender }) {
  const { user } = useUserContext();
  let side = sender === user.email ? "self-end myMsg" : "self_start";
  return (
    <div className={`chatBubble m-2 text-lg h-fit px-4 py-2 w-fit max-w-2xl break-words whitespace-normal rounded-2xl ${side}`}>
      {msg}
    </div>
  );
}

export default ChatBubble;
