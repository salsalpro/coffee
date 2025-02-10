'use client'
import { showSwal } from '@/src/utils/helpers'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { MdOutlineChangeCircle } from 'react-icons/md'

export default function UserChangeRole({ id }) {

    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    
    const router = useRouter()

    const areYouSure = () => {
        swal({ title: 'ایا میخواهید نقش این فرد تغیر دهید ؟', icon: 'warning', buttons: ['خیر', 'بله'] })
            .then(async result => {
                try {
                    if (result) {
                        if (!id) {
                            return showSwal('این کاربر یافت نشد', 'warning', 'ادامه')
                        }

                        setIsFetching(true)

                        const res = await fetch('/api/user/role', {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id })
                        })

                        if (res.status === 200) {
                            return showSwal('نقش کاربر به درستی تغیر کرد', 'success', 'ادامه')
                        }

                    }
                } catch (err) {
                    return console.log('err => ', err)
                } finally{
                    setIsFetching(false)

                    startTransition(() => {
                        router.refresh(); 
                    });
                }
            })
    }

    return <td className="py-3 text-center px-4 border border-[#938E8E] col-span-1 w-32" onClick={isPending || isFetching ? null : areYouSure}><button className="bg-white px-3 py-1 rounded" ><MdOutlineChangeCircle color='#D3AD7F'/></button></td>
}
