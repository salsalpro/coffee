'use client'
import { showSwal } from "@/src/utils/helpers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";

export default function DetailsBox() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    useEffect(() => {
        const GetMe = async () => {
            const res = await fetch('/api/me')
            if (res.status === 200) {

                const {user} = await res.json()
                
                const { email, phone, username } = user
                setUsername(username)
                setEmail(email)
                setPhone(phone)
            }

            if(res.status === 401){
                const res = await fetch('/api/auth/refresh')
                if(res.status === 401){
                    showSwal('شما باید لاگ این کنید' , 'warning' , 'ادامه')
                }
                if(res.status === 200){
                    GetMe()
                }
            }

        }

        GetMe()
    } , [] )

    const setChange = async () => {

        const newUser = {username , email , phone}

        const res = await fetch('/api/user' , {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...newUser})
        })

        if(res.status === 200){
            showSwal('تغیرات ثبت شد لطفا دوباره وارد شوید' , 'success' , 'ادامه')
            redirect('/auth/login')
        }
    }


    return (
        <div className="DetailsBox grid grid-cols-2">
            <div className="col-span-1 flex flex-col">
                <div className="inputBox flex flex-col mx-auto w-64 mb-4">
                    <label className="mb-1 w-64 ">نام کاربری شما</label>
                    <input type="text" className="rounded border bg-transparent w-64 type_white p-2 text-left" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="inputBox flex flex-col mx-auto w-64 mb-4">
                    <label className="mb-1 w-64 ">ایمیل شما</label>
                    <input type="text" className="rounded border bg-transparent w-64 type_white p-2 text-left" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="inputBox flex flex-col mx-auto w-64 mb-4">
                    <label className="mb-1 w-64 ">شماره تلفن شما</label>
                    <input type="text" className="rounded border bg-transparent w-64 type_white p-2 text-left" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="mx-auto w-64 bg-D3AD7F rounded text-white p-2 text-center text-lg cursor-pointer" onClick={setChange}>ثبت تغیرات</div>
            </div>
            <div className="col-span-1 flex flex-col items-center">
                <Image width={200} height={200} alt="user profile" src={`/users/nonePicUser1.png`} className={`w-64 h-64 rounded-full mb-6`} />
                <div className="button w-64 rounded bg-D3AD7F p-3 text-center text-lg  mb-6 flex justify-center cursor-pointer">

                    <span className="mx-1">تغیر</span>

                    <FaFileUpload color="#fff" size={18} className="my-auto mx-1 relative bottom-[1.5px]" />
                </div>
                <div className="button w-64 rounded bg-D3AD7F p-3 text-center text-lg  mb-6 flex justify-center cursor-pointer">

                    <span className="mx-1">حذف</span>

                    <IoTrashSharp color="#fff" size={18} className="my-auto mx-1 relative bottom-[1.5px]" />
                </div>
            </div>
        </div>
    )
}
