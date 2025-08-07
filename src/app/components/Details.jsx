"use client"
import React, { useState } from 'react'

const Details = () => {
    const [names, setNames] =useState('');
    const [messages, setMessages] = useState('');
    const [ submission, setSubmission] =useState(false)
    const [responsePost, setResponsePost] =useState(null)

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

        fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: names,
        body: messages,
        userId: 1
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setResponsePost(data); 
      });
  };

    
  return (
    <>
    <div className=' flex justify-center pt-5 '>
       
        { !submission && 
        
      <form onSubmit={submitHandler}
      className=' relative '
      
     >
        <input
        type='text'
        onChange={nameHandler}
        value={names}
        placeholder='Enter Your Name Here...'
        className='border-2 bg-white text-gray-600 my-2 rounded-lg px-16 py-3' />

        <div className='block'>
        <textarea
        type='text'
        onChange={messageHandler}
        value={messages}
        placeholder='Whats your story...'
       className="border-2 bg-white text-gray-600 rounded-lg px-18  py-20  " />
       </div>

        <button type='submit' 
         className="bg-orange-400 border-sm text-white px-34 py-2  rounded-sm"> Submit</button>
      </form>
    }

      {submission && <p className='text-white flex justify-center '> Thank you for sharing your story</p>}
      </div>
      {responsePost && 
      <div className=' block text-center'>
      <p className='text-white py-2 px-2'>Name: {responsePost.name}</p>
      <p className='text-white'>Message: {responsePost.body}</p>
      </div>
      }
    
    </>
  )
}

export default Details
