'use client'
import React, { useEffect, useState } from 'react'
import { ImStarFull } from 'react-icons/im'
import { FaRegStar } from 'react-icons/fa'

export default function CommentForm({ sendComment }) {

  const [body, setBody] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [score, setScore] = useState(5)

  return (
    <>
      <div className="score w-full block flex flex-right mb-3">
        <p className='mx-2'>امتیاز شما : </p>
        <div className="stars flex flex-right mx-2">
          <ImStarFull onClick={() => setScore(1)} className={`mx-1 cursor-pointer inline-block`} color='#fff' />
          <ImStarFull onClick={() => setScore(2)} className={`mx-1 cursor-pointer ${score > 1 ? 'inline-block' : 'hidden'} `} color='#fff' />
          <FaRegStar onClick={() => setScore(2)} className={`mx-1 cursor-pointer ${score < 2 ? 'inline-block' : 'hidden'}`} color='#fff' />
          <ImStarFull onClick={() => setScore(3)} className={`mx-1 cursor-pointer ${score > 2 ? 'inline-block' : 'hidden'} `} color='#fff' />
          <FaRegStar onClick={() => setScore(3)} className={`mx-1 cursor-pointer ${score < 3 ? 'inline-block' : 'hidden'}`} color='#fff' />
          <ImStarFull onClick={() => setScore(4)} className={`mx-1 cursor-pointer ${score > 3 ? 'inline-block' : 'hidden'} `} color='#fff' />
          <FaRegStar onClick={() => setScore(4)} className={`mx-1 cursor-pointer ${score < 4 ? 'inline-block' : 'hidden'}`} color='#fff' />
          <ImStarFull onClick={() => setScore(5)} className={`mx-1 cursor-pointer ${score > 4 ? 'inline-block' : 'hidden'} `} color='#fff' />
          <FaRegStar onClick={() => setScore(5)} className={`mx-1 cursor-pointer ${score < 5 ? 'inline-block' : 'hidden'}`} color='#fff' />
        </div>
      </div>
      <div className='w-full'>
        <textarea value={body} onChange={e => setBody(e.target.value)}
          id="comment"
          name="comment"
          cols="45"
          rows="8"
          required
          placeholder="نظر شما"
          className='type_ w-full mb-3 rounded border block border-white text-white p-3 bg-transparent'
        ></textarea>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text" className='placeholder-white text-left type_ w-full mb-3 rounded border block border-white text-white p-3 bg-transparent' placeholder='نام کاربری' />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className='placeholder-white text-left type_ w-full mb-3 rounded border block border-white text-white p-3 bg-transparent' placeholder='ایمیل' />
        <button className='p-3 rounded bg-19 w-full' onClick={() => sendComment({ body, setBody, username,  setUsername, email ,  setEmail, score })}>ثبت نظر</button>
      </div>
    </>
  )
}
