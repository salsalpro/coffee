'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'
import Login from '../../module/login_signup_loginBySms/login/page'
import LoginBySms from '../../module/login_signup_loginBySms/loginBySms/page'
import Signup from '../../module/login_signup_loginBySms/signup/page'
import ForGotPass from '../../module/login_signup_loginBySms/ForGotPass/page'

export default function Login_signup_loginBySms() {

  const [whatIsActive, setWhatIsActive] = useState('LogIn') // LogIn // signup // LogInBySms //ForGotPass

  return (
    <div className={`flex justify-center items-center my-auto mx-0 min-h-screen w-full h-full bg-19`}>
      <div className={`w-70 min-7-400 max-w-100 h-70 min-h-400 max-h-1000 my-0 mx-auto rounded-3xl overflow-hidden grid grid-cols-12 items-center bx-shadow`}>
        <div className={`col-span-8 p-0 pe-0 bg-D3AD7F h-full`}>
          {whatIsActive === 'LogIn' ? <Login /> : (<></>)} {

            whatIsActive === 'signup' ? <Signup /> : (<></>)} {

            whatIsActive === 'LogInBySms' ? <LoginBySms /> : (<></>)} {

            whatIsActive === 'ForGotPass' ? <ForGotPass /> : (<></>)} 
        </div>
        <div className={`col-span-4 p-0 ${styles.links}`}>
          <ul className='p-0'>
            <li onClick={() => setWhatIsActive('LogIn')} className={`${whatIsActive === 'LogIn' ? styles.active : ''} p-2.5 ps-6 my-6 transition-all-linear-03-bg w-52 rounded-l-full block  cursor-pointer text-white`}>
              ورود
            </li>
            <li onClick={() => setWhatIsActive('signup')} className={`${whatIsActive === 'signup' ? styles.active : ''} p-2.5 ps-6 my-6 transition-all-linear-03-bg w-52 rounded-l-full block  cursor-pointer text-white`}>
              ثبت نام
            </li>
            <li onClick={() => setWhatIsActive('LogInBySms')} className={`${whatIsActive === 'LogInBySms' ? styles.active : ''} p-2.5 ps-6 my-6 transition-all-linear-03-bg w-52 rounded-l-full block  cursor-pointer text-white`}>
              ورود با کد یکبار مصرف
            </li>
            <li onClick={() => setWhatIsActive('ForGotPass')} className={`${whatIsActive === 'ForGotPass' ? styles.active : ''} p-2.5 ps-6 my-6 transition-all-linear-03-bg w-52 rounded-l-full block  cursor-pointer text-white`}>
                بازیابی گذرواژه
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
