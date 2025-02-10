'use client'
import { showSwal } from '@/src/utils/helpers'
import React, { useState } from 'react'


export default function Form() {

    const [name , setName] = useState('')
    const [communicationMethod , setCommunicationMethod] = useState('')
    const [message , setMessage] = useState('')

    const sendContact = async () => {

        if(!name.trim('')){
            return showSwal('نام شما نیاز است' , 'error' , 'ادامه')
        }

        if(!communicationMethod.trim('')){
            return showSwal('راه ارتبطی شما نیاز است' , 'error' , 'ادامه')
        }

        if(!message.trim('')){
            return showSwal('در حد یک موضوع بنویسید درباره چه چیزی میخواهید صحبت کنید' , 'error' , 'ادامه')
        }
        
        const contact = {name , communicationMethod , message}
        const res = await fetch(`http://localhost:3000/api/contact` , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...contact})
            })

            if(res.status === 201){

                setName('')
                setCommunicationMethod('')
                setMessage('')


                return showSwal('با موقیت ثبت شد' , 'success' , 'ادامه')
            }

            if(res.status === 422){
                return showSwal('اطلاعات به درستی وارد نشده است' , 'error' , 'ادامه')
            }

            if(res.status === 500){
                return showSwal('مشکلی در سرور وجود دارد' , 'error' , 'ادامه')
            }

    }

    return (
       <div className="grid grid-cols-2 gap-4 block w-auto mb-6">
        <input type="text" className="col-span-1 p-3 rounded-lg bx-shadow-less bg-19 border border-gray-400 w-96  type_white type_white text-white  placeholder-gray mr-auto " placeholder='اسم شما'  value={name} onChange={e => setName(e.target.value)} />
        <input type="text" className="col-span-1 p-3 rounded-lg bx-shadow-less bg-19 border border-gray-400 w-96  type_white type_white text-white  placeholder-gray ml-auto " placeholder='راه ارتباطی'  value={communicationMethod} onChange={e => setCommunicationMethod(e.target.value)} />
        <textarea rows="6" className="col-span-2 p-3 rounded-lg bx-shadow-less bg-19 border border-gray-400 w-49rem type_white type_white text-white  placeholder-gray mx-auto " placeholder='درمورد چه چیزی میخواهید صحبت داشته باشیم' value={message} onChange={e => setMessage(e.target.value)}  ></textarea>
        <div className="col-span-2 py-2 px-3 text-white text-center cursor-pointer bg-D3AD7F bg-transparent w-49rem rounded-lg mx-auto block" onClick={sendContact}>
            ارسال
        </div>
       </div>
    );
}
