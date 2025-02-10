import Image from 'next/image'
import React from 'react'


export default function Awnser({ user, createdAt, body , is_A_Ticket }) {

  return (
    <div className={`mb-5 p-2 rounded min-w-[350px] w-fit max-w-[700px] ${is_A_Ticket ? 'bg-D3AD7F text-white ml-auto' : 'border-D3AD7F text-D3AD7F mr-auto'}`}>
      <div className="userInfo flex justify-between">
        <div className="info flex items-center">
          <Image alt='user' src={'/users/nonePicUser1.png'} width={30} height={30} className='w-20 h-20 rounded-full ml-2 mb-2' />
          <div className="infoText">
            <h3 className="name">{user.username}</h3>
            <p className='text-xs'>{user.role === 'USER' ? 'کاربر' : 'ادمین'}</p>
          </div>
        </div>
        <span className="date">{new Date(createdAt).toLocaleString('fa-IR')}</span>
      </div>
      <p className={`message rounded p-2 ml-auto block ${is_A_Ticket ? 'bg-white text-D3AD7F' : 'bg-D3AD7F text-white'}`}>{body}</p>
    </div>
  )
}
