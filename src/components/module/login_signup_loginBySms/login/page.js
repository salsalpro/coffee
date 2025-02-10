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

      const { role } = await res.json()

      swal({ title: 'شما وارد شدید', icon: 'success', buttons: 'رفتن به پنل کاربری' })
        .then(result => {
          if (result) {
            if(role === 'ADMIN'){
              return redirect('/p_admin')
            }
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
  )
}


