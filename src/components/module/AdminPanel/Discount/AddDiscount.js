'use client'

import { showSwal } from "@/src/utils/helpers"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

export default function AddDiscount() {

    const [code, setCode] = useState('')
    const [percentInput, setPercent] = useState(0)
    const [expireAtInput, setExpireAt] = useState(1)
    const [maxUseInput, setMaxUse] = useState(1)

    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const router = useRouter()

    const createDiscount = async () => {
        try {

            const percent = Number(percentInput)
            if (!percent) {
                return showSwal('درصد و زمان انتقصا باید عدد باشد', 'warning', 'ادامه')
            }

            const expireAt = Number(expireAtInput)
            const maxUse = Number(maxUseInput)
            if (!expireAt) {
                return showSwal('درصد و زمان انتقصا باید عدد باشد', 'warning', 'ادامه')
            }

            const validcode = code === "" ? false : true
            if (!validcode) {
                return showSwal('نیاز به داشتن کد است', 'warning', 'ادامه')
            }

            const newDiscount = { code, percent, expireAt, maxUse }

            setIsFetching(true)
            const res = await fetch(`/api/discount/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...newDiscount })
            })
            if (res.status === 201) {
                setCode('')
                setPercent(0)
setExpireAt(1)
setMaxUse(1)

                return showSwal('کد تخفیف اضافه شد', 'success', 'ادامه')
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


    return (
        <div className='sdddiscount grid grid-cols-4 gap-5 grid-center mb-24'>
            <div className="col-span-2 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text1">کد خود رو بنویسید</label>
                <input type="text" id="text1" value={code} onChange={e => setCode(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-2 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text2">چند درصد تخفیف داشته باشد</label>
                <input type="text" id="text2" value={percentInput} onChange={e => setPercent(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-2 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">تا چند ساعت دیگر انقصا داشته باشد (عدد)</label>
                <input type="text" id="text3" value={expireAtInput} onChange={e => setExpireAt(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-2 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">تا چند بار انقصا داشته باشد (عدد)</label>
                <input type="text" id="text3" value={maxUseInput} onChange={e => setMaxUse(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-4 grid grid-cols-3">
                <div className="col-span-4 grid grid-cols-subgrid">
                    <button className="button bg-D3AD7F text-white rounded p-3 block col-start-2" onClick={isPending || isFetching ? null : createDiscount}>
                        ایجاد کد تخفیف جدید
                    </button>
                </div>
            </div>
        </div>
    )
}
