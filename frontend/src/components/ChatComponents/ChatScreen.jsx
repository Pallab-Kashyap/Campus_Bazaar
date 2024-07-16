import React from 'react'
import { useState } from 'react';
import ChatBubble from './ChatBubble';
import { sendMsg } from '../../utils/supabase/supaOperations';
import { useCurrUserDtl } from '../../context/chatConext';
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
            <div className='chatContainer w-full h-[91%] bg-cyan-500 flex flex-col-reverse overflow-y-scroll p-2'>
                {chats.map((chat) => (
                    <ChatBubble msg={chat.content} sender={chat.sender_id} key={chat.message_id}/>
                ))}

            </div>
            <div className="msgInput">
                <input 
                    className='m-3 w-[90%] p-1 rounded-md' 
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button
                className='p-1 px-2 bg-green-500 rounded-md'
                onClick={handleClick}>send</button>
            </div>
        </div>
    )
}

export default ChatScreen
