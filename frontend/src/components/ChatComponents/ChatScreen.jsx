import React from 'react'
import { useState } from 'react';
import ChatBubble from './ChatBubble';
import { sendMsg } from '../../utils/supabase/supaOperations';
import { useCurrUserDtl } from '../../context/chatConext';
import { RiSendPlaneFill } from "react-icons/ri";
import './ChatStyle.css'



function ChatScreen({chats, chatInfo}) {
    
    const {currUser} = useCurrUserDtl();
    const [msg, setMsg] = useState('');
    const handleClick = () => {
        if(!msg) return
        if(chats.length != 0){
            sendMsg(chats[0].chat_box_id,currUser,(chats[0].recever_id === currUser)? chats[0].sender_id : chats[0].recever_id,msg )
        }
        else{
            sendMsg(chatInfo.chatBoxId,chatInfo.currUser,chatInfo.receverId,msg)
        }
        setMsg('')
    }

    return (
        <div className='chatScreen h-full w-full '>
            <div className='chatContainer w-full h-[88%]  flex flex-col-reverse overflow-y-scroll p-3 px-6'>
                {chats.map((chat) => (
                    <ChatBubble msg={chat.content} sender={chat.sender_id} key={chat.message_id}/>
                ))}

            </div>
            <div className="msgInputContainer w-full h-[12%] flex justify-center items-center">
                <input 
                    className='msgInput h-12 m-3 w-[90%] p-4 rounded-3xl text-white outline-none' 
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button
                className='msgSendBtn p-3 rounded-full text-white'
                onClick={handleClick}>
                    <RiSendPlaneFill />
                </button>
            </div>
        </div>
    )
}

export default ChatScreen
