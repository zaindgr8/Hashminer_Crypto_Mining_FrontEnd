import React, { useState } from 'react'

const MessageInput = ({send}:{send: (value:string)=>void}) => {
    const [value, setValue]=useState("")
  return (
    <>
    <input className='text-black' onChange={(e)=>setValue(e.target.value)} placeholder='Type your message here ...' value={value} />
    <button onClick={()=>send(value)} >Send</button>
    </>
  )
}

export default MessageInput