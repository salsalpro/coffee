'use client'
import { showSwal } from '@/src/utils/helpers'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { IoTrashSharp } from 'react-icons/io5'

export default function RemoveDiscount({ code }) {


    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const router = useRouter()



    const RemoveDiscount = async () => {
        swal({ title: 'میخواهید این کد تخفیف را حذف کنید ؟', icon: 'warning', buttons: ['خیر', 'بله'] })
            .then(async result => {
                if (result) {
                    try {
                        setIsFetching(true)
                        const res = await fetch(`/api/discount/${code}`, { method: 'DELETE' })
                        if (res.status === 200) {
                            return showSwal('کد تخفیف حذف شد', 'success', 'ادامه')
                        }
                        if (res.status !== 200) {
                            return showSwal('خطایی رخ داده', 'error', 'ادامه')
                        }
                    } catch (err) {
                        console.error("خطا در حذف کد تخفیف:", err);
                        return showSwal('خطایی رخ داد، لطفاً دوباره امتحان کنید', 'error', 'متوجه شدم');
                    } finally {
                        setIsFetching(false);

                        startTransition(() => {
                            router.refresh();
                        });
                    }


                }
            })
    }

    return <td className="py-3 text-center px-4 border border-[#938E8E] w-10" onClick={isPending || isFetching ? null : RemoveDiscount}><button className="bg-white px-3 py-1 rounded"><IoTrashSharp color='#D3AD7F' /></button></td>
}
