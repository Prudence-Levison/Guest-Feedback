"use client"
import React, { useState } from 'react'

const Details = () => {
    const [names, setNames] =useState('');
    const [messages, setMessages] = useState('');
    const [ submission, setSubmission] =useState(false)

    const nameHandler=(e)=>{
        setNames(e.target.value)
    }

    const messageHandler=(e)=>{
        setMessages(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Names:", names)
        console.log("Messages:", messages)
        setSubmission(true);
        setNames("")
        setMessages("")
    }
  return (
    <div className=' flex justify-center '>
       
        { !submission && 
      <form onSubmit={submitHandler}
      className='relative'
     >
        <input
        type='text'
        onChange={nameHandler}
        value={names}
        placeholder='Enter Your Name Here...'
        className='border-2 bg-white text-gray-600  px-6 py-3' />

        <input 
        type='text'
        onChange={messageHandler}
        value={messages}
        placeholder='Whats your story...'
       className="border-2 bg-white text-gray-600  px-6 py-3  " />

        <button type='submit' 
         className="bg-green-600 border-sm text-white px-3 rounded-sm"> Submit</button>
      </form>}

      {submission && <p className='text-white'> Thank you for sharing your story</p>}
    </div>
  )
}

export default Details
