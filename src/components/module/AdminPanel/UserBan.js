'use client'
import { showSwal } from '@/src/utils/helpers'
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { FaBan } from "react-icons/fa6";

export default function UserBan({ username, phone }) {

    const [isFetching, setIsFetching] = useState(false)
    const [isPending, startTransition] = useTransition()

    const router = useRouter()

    const BanUser = () => {
        swal({ title: 'آیا متمعنی هستید که میخواهید این کاربر را مسدود کنید ؟ ', icon: 'warning', buttons: ['خیر', 'بله'] })
            .then(async Result => {

                try {
                    setIsFetching(true)
                    if (Result) {

                        const res = await fetch('/api/user/ban' , {
                            method:'POST',
                            headers:{
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify({username , phone})
                        })

                        if(res.status === 201 ){
                            showSwal('کاربر مسدود شد ' , 'success' , 'ادامه ')
                        }

                    }
                } catch (err) {
                    return console.log(err.message)
                } finally {
                    setIsFetching(false)

                    startTransition(() => {
                        router.refresh()
                    })
                }
            })
    }

    return <td className=" text-center border border-[#938E8E] col-span-1 w-6 p-3" onClick={isFetching || isPending ? null : BanUser} ><button className="bg-white px-3 py-1 rounded"><FaBan color='#D3AD7F' /></button></td>
}
