import React, { useState } from 'react'

function Search() {

    const [ inputVal, setInputVal] = useState('')
    const handleClick = () => {
        setInputVal('');
    }

    return (
        <div className='search w-full h-10 bg-cyan-400 flex justify-center items-center'>
            <input
                className='w-56 bg-transparent rounded-md mx-1 outline outline-black p-1 text-black' 
                type="text"
                value = {inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
            <button onClick={handleClick}
                className=' bg-blue-600 px-1 py-1 rounded-md'
            >search</button>
        </div>
    )
}

export default Search