'use client'
import swal from 'sweetalert'
import React, { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { FaCheck } from 'react-icons/fa'
import { showSwal } from '@/src/utils/helpers'

export default function AcceptComment({ _id, isAccept }) {

    const router = useRouter()

    const [isPending, StartTrantion] = useTransition()
    const [isFetching, setIsFetching] = useState(false)

    const AcceptCommentHndeler = () => {
        swal({ title: 'آیا از تایید این نظر اطمینان دارید ؟ ', icon: 'warning', buttons: ['خیر', 'بله'] })
            .then(async result => {
                try {
                    setIsFetching(false)
                    if (result) {
                        if (_id) {
                            const res = await fetch(`/api/comments/${_id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })

                            console.log('status => ' , res.status)

                            if (res.status === 200) {
                                showSwal('نظر تایید شد' , 'success' , 'ادامه')
                            }
                            if (res.status !== 200) {
                                showSwal('در تایید نظر مشکلی ایجاد شده' , 'error' , 'ادامه')
                            }
                            return
                        }
                        showSwal('این نظر پیدا نشد', 'error', 'ادامه')
                    }
                } catch (err) {
                    return console.log('err => ', err)
                } finally {
                    setIsFetching(false)
                    StartTrantion(() => {
                        router.refresh()
                    })
                }
            })
    }

    return isAccept ? <td className={`py-3 text-center px-4 border border-[#938E8E] w-20 `} ><button className="bg-white px-3 py-1 rounded" ><FaCheck color='#D3AD7F' /></button></td>
     : <td className="py-3 text-center px-4 border border-[#938E8E] max-w-20 w-20 whitespace-no-wrap " onClick={isPending || isFetching ? null : AcceptCommentHndeler}><span className='bg-white px-3 py-1 rounded text-D3AD7F cursor-pointer'>تایید کردن</span></td>
}
