import { validatPass, verifyEmail, verifyPhone } from '@/src/utils/auth'
import { showSwal } from '@/src/utils/helpers'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import swal from 'sweetalert'

export default function Signup() {


  const [isShowPassGuide, setIsShowPassGuide] = useState(false)
  const [isShowEmailGuide, setIsShowEmailGuide] = useState(false)
  const [isShowPhoneGuide, setIsShowPhoneGuide] = useState(false)

  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [showPass, setShowPass] = useState(false)

  const signup = async e => {
    e.preventDefault()
    if (!username.trim('')) {
      return showSwal('نام کاربری اجباری است', 'error', 'تلاش مجدد')
    }
    if (!phone.trim('')) {
      return showSwal('شماره شما اجباری است', 'error', 'تلاش مجدد')
    }

    const isValidPhone = await verifyPhone(phone)

    if (!isValidPhone) {
      return showSwal('شماره شما به درستی نوشته نشده است', 'error', 'تلاش مجدد')
    }

    if (email.trim()) {
      const validatEmail = await verifyEmail(email)
      if (!validatEmail) {
        return showSwal('ایمیل شما به درستی نوشته نشده است', 'error', 'تلاش مجدد')
      }
    }

    if (password.trim()) {
      const isValidPass = await validatPass(password)

      if (!isValidPass) {
        return showSwal('پسسورد شما قابل حدس است میتوانید از عدد # حرف بزرگ و.. استفاده کنید', 'error', 'تلاش مجدد')
      }
      if (password !== repeatPassword) {
        return showSwal('پسسورد شما همخوانی ندارد', 'error', 'تلاش مجدد')
      }
    }



    const payload = { username, phone, email, password }
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...payload })
    })

    if (res.status === 201) {

      const { role } = await res.json()

      swal({ title: 'ثبت نام شما کامل شد', icon: 'success', buttons: 'رفتن به پنل کاربری' })
        .then(result => {
          if (result) {
            if (result) {
              if (role === 'ADMIN') {
                return redirect('/p_admin')
              }
              return redirect('/p_user')
            }
          }
          redirect('/p_user')
        })
      setUsername('')
      setPhone('')
      setEmail('')
      setPassword('')
      setRepeatPassword('')
    } else if (res.status === 409) {
      showSwal('کاربری با این اطلاعات از قبل ثبت نام کرده است')
    }
    else if (res.status === 403) {
      showSwal('کاربری با این اطلاعات مسدود شده است' , 'error' , 'ادامه')
    }
  }

  const isShowPassGuideHandeler = () => {
    const isValidPass = validatPass(password)
    if (!isValidPass) {
      setIsShowPassGuide(true)
    } else {
      setIsShowPassGuide(false)
    }
  }

  const isShowEmailGuideHandeler = () => {
    const isValidEmail = verifyEmail(email)
    if (!isValidEmail) {
      setIsShowEmailGuide(true)
    } else {
      setIsShowEmailGuide(false)
    }
  }

  const isShowPhoneGuideHandeler = () => {
    const isValidPhone = verifyPhone(phone)
    if (!isValidPhone) {
      setIsShowPhoneGuide(true)
    } else {
      setIsShowPhoneGuide(false)
    }
  }

  return (
    <div className={`w-full p-3 flex justify-center items-center h-full`}>
      <form>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='type_ text-center block w-52 rounded p-2 mb-3 select-auto' placeholder='نام کاربری' />
        <input type="text" onKeyDown={isShowPhoneGuideHandeler} value={phone} onChange={(e) => setPhone(e.target.value)} className='type_ text-center block w-52 rounded p-2 mb-3 select-auto' placeholder='شماره تماس' />
        {
          isShowPhoneGuide ? (<p className='text-white text-small w-52 text-right mb-3'>شماره تماس شما کامل / درست نیست</p>) : (<></>)
        }
        <input type="email" onKeyDown={isShowEmailGuideHandeler} value={email} onChange={(e) => setEmail(e.target.value)} className='type_ text-center block w-52 rounded p-2 mb-3 select-auto' placeholder='ایمیل (اختیاری)' />
        {
          isShowEmailGuide ? (<p className='text-white text-small w-52 text-right mb-3'>ایمیل مناسب : to.salsal.pro@gmail.com</p>) : (<></>)
        }
        <div className="password_parent relative flex items-center mb-3 flex-col">

          <input type={`${showPass ? 'text' : 'password'}`} onKeyDown={isShowPassGuideHandeler} value={password} onChange={(e) => setPassword(e.target.value)} className='type_ text-center block w-52 rounded p-2 select-auto' placeholder='گذرواژه' />

          {
            showPass ? (
              <FaRegEye size={13} className='absolute left-3 cursor-pointer top-0 bottom-0 my-auto' onClick={e => setShowPass(false)} color='#D3AD7F' />
            ) : (
              <FaRegEyeSlash size={13} className='absolute left-3 cursor-pointer top-0 bottom-0 my-auto' onClick={e => setShowPass(true)} color='#D3AD7F' />
            )
          }

        </div>

        {
          isShowPassGuide ? (<p className='text-white text-small w-52 text-right mb-3'>حروف a-z و A-Z و عداد و !@#$%^&* و بیشتر از 4 کاراکتر</p>) : (<></>)
        }

        <div className="password_parent relative flex items-center mb-3 flex-col">
          <input type={`${showPass ? 'text' : 'password'}`} value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} className='type_ text-center block w-52 rounded p-2 select-auto' placeholder='تکرار گذرواژه' />

          {
            showPass ? (
              <FaRegEye size={13} className='absolute left-3 cursor-pointer top-0 bottom-0 my-auto' onClick={e => setShowPass(false)} color='#D3AD7F' />
            ) : (
              <FaRegEyeSlash size={13} className='absolute left-3 cursor-pointer top-0 bottom-0 my-auto' onClick={e => setShowPass(true)} color='#D3AD7F' />
            )
          }

        </div >
        <button onClick={signup} className='px-3 py-2 bg-19 w-52 block rounded text-white'>ورود</button>
      </form>
    </div>
  )
}
