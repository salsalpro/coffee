'use client'
import swal from 'sweetalert'
import React, { useState, useTransition } from 'react'
import { FaPen } from 'react-icons/fa'
import { showSwal } from '@/src/utils/helpers'
import { useRouter } from 'next/navigation'
export default function AwnserTciket({ ticket }) {



    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)

    const router = useRouter()

    const showTciketHandeler = () => {
        swal({
            title: 'پاسخ خود را وارد نمایید ',
            content: 'input',
            button: 'ثبت پاسخ',
        })
            .then(async awnser => {
                if (awnser) {
                    try {
                        setIsFetching(true)
                        const ticketInfo = { body: awnser, title: ticket.title, department: ticket.department._id, subDepartment: ticket.subDepartment._id, ticketID: ticket._id, priority: ticket.priority }
                        const res = await fetch('/api/tickets/awnser', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ ...ticketInfo })
                        })

                        if (res.status === 201) {
                            return showSwal('پاسخ شما ثبت شد', 'success', 'ادامه')
                        }

                        if (res.status !== 201) {
                            return showSwal('در ثبت پاسخ شما مشکلی پیدا شد', 'error', 'ادامه')
                        }
                    } catch (err) {
                        return console.log(' err => ', err)
                    } finally {
                        setIsFetching(false)
                        startTransition(() => {
                            router.refresh()
                        })
                    }

                }
            })
    }

    return <td className="py-3 text-center px-4 border border-[#938E8E] w-10" onClick={isPending || isFetching ? null : showTciketHandeler}><button className="bg-white px-3 py-1 rounded"><FaPen color='#D3AD7F' /></button></td>
}
