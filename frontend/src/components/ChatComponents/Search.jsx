import React, { useState } from 'react'
import '../../pages/Chat/ChatInterface.css'

function Search() {

    const [ inputVal, setInputVal] = useState('')
    const handleClick = () => {
        setInputVal('');
    }

    return (
        <div className='searchChatBox w-full h-16 flex justify-center items-center'>
            <div className='searchInput w-80 h-12 rounded-3xl flex justify-center'>
            <input
                className='searchInput w-56 bg-transparent rounded-md mx-1  p-1 outline-none' 
                type="text"
                value = {inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder='Search'
            />
            </div>
        </div>
    )
}

export default Search