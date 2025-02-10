'use client'
import { showSwal } from "@/src/utils/helpers"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { FaFileUpload } from "react-icons/fa"

export default function AddProduct() {

    const router = useRouter()
    const [isPending, StartTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [shortDescription, setShortDescription] = useState('')
    const [longDescription, setSongDescription] = useState('')
    const [weight, setWeight] = useState('')
    const [suitableFor, setSuitableFor] = useState('')
    const [smell, setSmell] = useState('')
    const [tags, setTags] = useState('')
    const [img, setImg] = useState(null)

    const createProduct = async () => {
        if (!name.trim()) {
            return showSwal('اسم خالی است ', 'warning', 'ادامه')
        }
        if (!price.trim()) {
            return showSwal('قیمت خالی است ', 'warning', 'ادامه')
        }
        if (!shortDescription.trim()) {
            return showSwal('توضیحات کوتاه خالی است ', 'warning', 'ادامه')
        }
        if (!longDescription.trim()) {
            return showSwal('توضیحات بلند خالی است ', 'warning', 'ادامه')
        }
        if (!weight.trim()) {
            return showSwal('وزن خالی است ', 'warning', 'ادامه')
        }
        if (!suitableFor.trim()) {
            return showSwal('مناسب برای : خالی است ', 'warning', 'ادامه')
        }
        if (!smell.trim()) {
            return showSwal('مقدار بو خالی است ', 'warning', 'ادامه')
        }
        if (!tags.trim()) {
            return showSwal('برچسب خالی است ', 'warning', 'ادامه')
        }
        if (!img) {
            return showSwal('برچسب خالی است ', 'warning', 'ادامه')
        }

        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', price)
        formData.append('shortDescription', shortDescription)
        formData.append('longDescription', longDescription)
        formData.append('weight', weight)
        formData.append('suitableFor', suitableFor)
        formData.append('smell', smell)
        formData.append('tags', tags.split(','))
        formData.append('img', img)



        try {
            setIsFetching(true)
            const res = await fetch('/api/products', {
                method: 'POST',
                body: formData
            })

            if (res.status === 201) {
                setName('')
                setPrice(0)
                setShortDescription('')
                setSongDescription('')
                setWeight('')
                setSuitableFor('')
                setSmell('')
                setTags('')
                setImg(null)
                return showSwal('محصول ساخته شد', 'success', 'ادامه')
            }

            if (res.status === 422) {
                return showSwal('ولیدیشن محصول خطا داد یکی از فیلد ها خالی است', 'warning', 'ادامه')
            }


            if (res.status === 500) {
                return showSwal('خطا در سمت سرور', 'error', 'ادامه')
            }

        } catch (err) {
            return console.log('you have err => ', err.message)
        } finally {
            setIsFetching(false)
            StartTransition(() => {
                router.refresh()
            })
        }



    }

    return (
        <div className='sdddiscount grid grid-cols-3 gap-5 grid-center mb-24'>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text1">اسم محصول شما</label>
                <input type="text" id="text1" value={name} onChange={e => setName(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text2">قیمت محصول شما</label>
                <input type="text" id="text2" value={price} onChange={e => setPrice(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">توضیحات کوتاه</label>
                <input type="text" id="text3" value={shortDescription} onChange={e => setShortDescription(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">توضیحات بلند</label>
                <input type="text" id="text3" value={longDescription} onChange={e => setSongDescription(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">وزن</label>
                <input type="text" id="text3" value={weight} onChange={e => setWeight(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">مناسب برای : </label>
                <input type="text" id="text3" value={suitableFor} onChange={e => setSuitableFor(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">مقدار بو : </label>
                <input type="text" id="text3" value={smell} onChange={e => setSmell(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3">
                <label className="w-full block mb-1" htmlFor="text3">برچسب  : </label>
                <input type="text" id="text3" value={tags} onChange={e => setTags(e.target.value)} className="w-full block type_white border-D3AD7F bg-transparent p-3" />
            </div>
            <div className="col-span-1 flex flex-col mb-3 items-bottom">
                <div className="h-7"></div>
                <label
                    htmlFor="fileUpload"
                    className="text-D3AD7F py-3 px-4 py-2 cursor-pointer max-auto w-30 text-center text-center flex justify-center border-D3AD7F"
                >
                    {
                        img ? ` فایل انتخاب‌شده: ${img.name} ` : ` آپلود تصویر`
                    }

                    <FaFileUpload className='mx-3 relative top-1' />
                </label>
                <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    onChange={e => setImg(e.target.files[0])}
                />
            </div>
            <div className="col-span-3 items-center">
                <button className="col-span-1 w-full button bg-D3AD7F text-white rounded p-3 block" onClick={isPending || isFetching ? null : createProduct}>
                    ایجاد محصول جدید
                </button>
            </div>
        </div>
    )
}
