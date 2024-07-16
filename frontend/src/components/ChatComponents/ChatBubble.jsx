import React from 'react'
import { useCurrUserDtl } from '../../context/chatConext'

function ChatBubble({msg, sender}) {
    
    const { currUser } = useCurrUserDtl();
    let side = (sender === currUser) ? 'self-end' : 'self_start'
    return (
        <div className={`chatBubble m-2 text-lg h-fit px-2 py-1 w-fit max-w-4xl break-words whitespace-normal  bg-red-600 rounded-lg ${side}`}>         
                {msg}       
        </div>
    )
}

export default ChatBubble
