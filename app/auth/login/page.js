'use client'

import { validatPass, verifyEmail, verifyPhone } from '@/src/utils/auth'
import { showSwal } from '@/src/utils/helpers'
import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


export default function Login() {

  const [identifire, setIdentifire] = useState('')
  const [password, setPassword] = useState('')

  const [showPass, setShowPass] = useState(false)


  const LogInHandeler = async e => {
    e.preventDefault()
    if (!identifire.trim()) {
      showSwal('شماره / ایمیل شما اجباری است', 'error', 'تلاش مجدد')
    }

    if (!password.trim()) {
      showSwal('گذرواژه شما اجباریست اگر فراموش کرده اید میتوانید بازیابی یا با کد یک بار مصرف ورود انجام بدهید', 'error', 'تلاش مجدد')
    }

    const isValidEmail = verifyEmail(identifire)
    const isValidPhone = verifyPhone(identifire)

    if (!isValidEmail && !isValidPhone) {
      showSwal('شماره / ایمیل درست نیست', 'error', 'بازنویسی')
    }

    const isValidPassword = validatPass(password)

    if (!isValidPassword) {
      showSwal('شماره / ایمیل یا رمز شما درست نیست', 'error', 'بازنویسی')
    }

    const res = await fetch('/api/auth/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ identifire, password })
    })

    if (res.status === 200) {

      const response = await res.json()

      swal({title:'شما ثبت نام نکرده اید' , icon:'success' , buttons:'رفتن به پنل کاربری'})
      .then(result => {
        if(result){
          return redirect('/p_user')
        }
        redirect('/')
      })
      setPassword('')
      setIdentifire('')
    }

    if (res.status === 402) {
      showSwal('شما ثبت نام نکرده اید', 'error', 'ثبت نام')
      setPassword('')
      setIdentifire('')
    }

  }

  return (
    <div className={`flex justify-center items-center my-auto mx-0 min-h-screen w-full h-full bg-19`}>
      <div className={`w-70 min-7-400 max-w-100 h-70 min-h-400 max-h-1000 my-0 mx-auto rounded-3xl overflow-hidden grid grid-cols-12 items-center bx-shadow`}>
        <div className={`col-span-8 p-0 pe-0 bg-D3AD7F h-full`}>
           <div className={`w-full p-3 flex justify-center items-center h-full`}>
               <form>
                 <input type="text" value={identifire} onChange={e => setIdentifire(e.target.value)} className='type_ text-center block w-52 rounded p-2 mb-3' placeholder='شماره / ایمیل شما' />
                 <div className="password_parent relative flex items-center mb-3 flex-col">
                   <input type={`${showPass ? 'text' : 'password'}`} value={password} onChange={e => setPassword(e.target.value)} className='type_ text-center block w-52 rounded p-2 ' placeholder='گذرواژه' />
                   {
                     showPass ? (
                       <FaRegEye size={13} className='absolute left-3 cursor-pointer top-0 bottom-0 my-auto' onClick={e => setShowPass(false)} color='#D3AD7F' />
                     ) : (
                       <FaRegEyeSlash size={13} className='absolute left-3 cursor-pointer top-0 bottom-0 my-auto' onClick={e => setShowPass(true)} color='#D3AD7F' />
                     )
                   }
                 </div>
         
                 <button onClick={LogInHandeler} className='select-none px-3 py-2 bg-19 w-52 my-0 mx-auto block rounded text-white'>ورود</button>
               </form>
             </div>
        </div>
        <div className={`col-span-4 p-0`}>
          <ul className='p-0'>
            <li className={`p-2.5 ps-6 my-6 w-52 rounded-l-full block  cursor-pointer text-white bg-D3AD7F relative Active_Link_Top_bottom`}>
              ورود
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
