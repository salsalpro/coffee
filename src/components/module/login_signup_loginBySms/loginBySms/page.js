import React, { useState } from 'react'
import OTPInput from 'react-otp-input'

export default function LoginBySms() {

  const [otp, setOtp] = useState('');

  const [phone, setPhone] = useState('')

  const [isShowTypeCode, setIsShowTypeCode] = useState(false)

  const LogInBySmshandeler = (e) => {
    e.preventDefault()
  }

  const sendCode = (e) => {
    e.preventDefault()
    setIsShowTypeCode(true)
  }

  return (
    <div className={`w-full p-3 flex justify-center items-center h-full`}>
      {
        isShowTypeCode ? (
          <div className='w-full flex items-center flex-col select-none'>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              inputStyle={{
                width: '60px',
                height: '60px',
                margin: '0 5px',
                border: '1px solid #191919',
                borderRadius: '10px',
                fontSize: '18px',
                background: 'transparent',
                textAlign: 'center',
                caretColor: '#191919',
                direction: 'ltr'
              }}

              focusStyle={{
                border: '1px solid #007bff', // تغییر رنگ مرز هنگام فوکوس
                outline: 'none',
                caretColor: 'blue',
              }}
              renderInput={(props) => <input dir='ltr' {...props} />}
            />
            <button onClick={LogInBySmshandeler} className='px-3 py-2 bg-19 w-56 my-0 mx-auto block rounded text-white mt-6'>ورود</button>
            <div className="buttons flex justify-around">
              <button className='px-3 py-2 bg-19 my-0 text-xs inline-block rounded text-white mt-6' onClick={() => {
                setIsShowTypeCode(false)
                setOtp('')
              }} >اصلاح شماره تماس</button>
              <button className='px-3 py-2 bg-19 my-0 mr-3 text-xs inline-block rounded text-white mt-6'>ارسال مجدد کد</button>
            </div>
          </div>
        ) : (
          <form className='select-none'>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='block type_ text-center w-52 rounded p-2 mb-3 my-0 mx-auto select-auto' placeholder='شماره تماس' />
            <button onClick={sendCode} className='px-3 py-2 bg-19 w-52 my-0 mx-auto block rounded text-white'>ارسال کد</button>
          </form>
        )
      }
    </div>
  )
}
