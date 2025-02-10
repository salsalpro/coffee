'use client'
import { showSwal } from '@/src/utils/helpers'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'


export default function Table({ stateOptions: stateOptionsGot }) {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [userAdress, setUserAdress] = useState({})
    const [stateOptions, setStateOptions] = useState([])

    const [changeAddress, setChangeAddress] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);

    //  adress use states
    const [city, setCity] = useState('');
    const [adress, setAdress] = useState('');


    // discount states => 
    const [discount, setDiscount] = useState('')


    const setDiscountHandeler = async () => {
        if (!discount) {
            return showSwal('کد تخفیف  خالی است اگر کد تخفیف ندارید خالی بگزارید ', 'warning', 'ادامه')
        }

        const res = await fetch(`/api/discount/use/${discount}`, {
            method: "GET",
            cache: "no-store", // جلوگیری از کش مرورگر
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                Pragma: "no-cache",
                Expires: "0",
            }
        })
        if (res.status === 200) {
            const discount = await res.json()
            const newTotalPrice = (totalPrice) - ((totalPrice * discount.discount.percent) / 100)
            setTotalPrice(newTotalPrice)
            return showSwal('تخفیف اعمال شد', 'success', 'ادامه')
        }

        if (res.status === 404) {
            return showSwal('کد تخفیف معتبر نیست', 'error', 'ادامه')
        }

        if (res.status === 410) {
            return showSwal('کد تخفیف منقضی شده', 'error', 'ادامه')
        }


    }

    const calculateTotalPrice = () => {
        let price = 0

        if (cart.length) {
            price = cart.reduce((prev, current) => {
                return prev + current.price * current.count
            }, 0)
            return setTotalPrice(Number(price))
        }

        return setTotalPrice(price)
    }

    const SetAdressIntoClient = () => {
        const userAdressGot = JSON.parse(localStorage.getItem('userAdress')) || {}
        setUserAdress({ ...userAdressGot })
    }

    const setUserAddressHandeler = () => {
        if (!city.trim()) {
            return showSwal('شهر شما نباید خالی باشد', 'warning', 'ادامه')
        }
        if (!adress.trim()) {
            return showSwal('آدرس شما نباید خالی باشد', 'warning', 'ادامه')
        }

        if (!selectedOption) {
            return showSwal('استان شما باید انتخاب شود', 'warning', 'ادامه')
        }


        const userAdress = {
            city,
            adress,
            selectedOption
        }

        localStorage.setItem('userAdress', JSON.stringify(userAdress))
        SetAdressIntoClient()
        setChangeAddress(false)
        return showSwal('آدرس شما با موفقیت تغیر کرد', 'success', 'ادامه')

    }

    useEffect(calculateTotalPrice, [cart])

    useEffect(() => {
        const cartGOT = JSON.parse(localStorage.getItem('cart')) || []
        const userAdressGot = JSON.parse(localStorage.getItem('userAdress')) || {}
        setCart([...cartGOT])
        setStateOptions(stateOptionsGot)
        setUserAdress({ ...userAdressGot })
    }, [])

    // const setUsedDiscountBefore = () => {
    //     localStorage.setItem()
    // }





    return (
        cart.length ?
            <div className="boxHolder grid grid-cols-12 gap-6 w-full">
                <div className='col-span-7'>
                    <table className="w-full text-center rounded-lg overflow-hidden mb-3">
                        <thead className="bg-[#191919] text-[#D3AD7F]">
                            <tr className="">
                                <th className="py-3 px-4 border border-[#D3AD7F]">محصول</th>
                                <th className="py-3 px-4 border border-[#D3AD7F]">قیمت</th>
                                <th className="py-3 px-4 border border-[#D3AD7F]">تعداد</th>
                                <th className="py-3 px-4 border border-[#D3AD7F]">جمع جزء</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#101011]'>
                            {
                                cart.map(item => (
                                    <tr className="hover:bg-[#191919] transition-all-ease-03" key={item.id} >
                                        <td className="py-3 text-D3AD7F text-center px-4 border border-[#D3AD7F] max-w-32 w-20 overflow-x-auto whitespace-no-wrap">{item.product}</td>
                                        <td className="py-3 text-D3AD7F text-center px-4 border border-[#D3AD7F] max-w-32 w-32 overflow-x-auto whitespace-no-wrap">{(item.price).toLocaleString('fa-IR')}</td>
                                        <td className="py-3 text-D3AD7F text-center px-4 border border-[#D3AD7F] w-16 whitespace-no-wrap">{(item.count).toLocaleString('fa-IR')}</td>
                                        <td className={`py-3 text-D3AD7F text-center px-4 border border-[#D3AD7F] max-w-24 w-20 overflow-x-auto whitespace-no-wrap `}>{(item.count * item.price).toLocaleString('fa-IR')}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="copen flex justify-right">
                        <input type="text" className='bg-transparent border-D3AD7F rounded p-2 mx-2 text-white type_white' value={discount} onChange={e => setDiscount(e.target.value)} />
                        <span className='bg-D3AD7F rounded text-white p-2 mx-2 cursor-pointer select-none' onClick={setDiscountHandeler}>اعمال کوپن</span>
                    </div>
                </div>
                <div className={`div bg-19 bx-shadow-less col-span-5 py-10 h-fit`}>
                    <div className="flex justify-right items-center w-11/12 block mx-auto mb-3">
                        <span className='text-lg text-white ml-3 w-3/12'>حمل و نقل : </span>
                        {
                            userAdress.adress ? <p className='text-center text-white'>{userAdress.selectedOption.label} , {userAdress.city} , {userAdress.adress}</p> : <p className='text-center text-white text-sm w-9/12 text-center'>برو روی تغیر آدرس کلیک کرده و آدرس خود را وارد نمایید</p>
                        }

                    </div>


                    <span className='p-0 text-right text-white block pb-2 cursor-pointer w-11/12 mx-auto' onClick={() => setChangeAddress(!changeAddress)}> {changeAddress ? 'همان آدرس' : 'تغیر آدرس'}</span>



                    {
                        changeAddress ? (
                            <>
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={stateOptions}
                                    sClearable={true}
                                    placeholder={"استان"}
                                    isRtl={true}
                                    isSearchable={true}
                                    className='w-11/12 block mx-auto mb-4'
                                    maxMenuHeight={170}
                                />

                                <input className='w-11/12 p-3 mb-3 mx-auto block rounded bg-white type_' type="text" placeholder="شهر" value={city} onChange={e => setCity(e.target.value)} />
                                <input className='w-11/12 p-3 mb-3 mx-auto block rounded bg-white type_' type="text" placeholder="آدرس" value={adress} onChange={e => setAdress(e.target.value)} />
                                <button className='w-11/12 p-3 block rounded bg-D3AD7F text-white mx-auto type_ mb-3' onClick={() => setUserAddressHandeler()}>بروزرسانی</button>
                            </>
                        ) : (
                            <>
                                <div className='flex justify-right text-white items-center w-11/12 mx-auto pb-3'>
                                    <p className='text-lg text-white  block ml-3'> مجموع سبد خرید : </p>
                                    <span className='text-lg'>{totalPrice.toLocaleString('fa-IR')}</span>
                                </div>
                                <button className='w-11/12 p-3 block rounded bg-D3AD7F text-white mx-auto type_'>ادامه جهت تصویه</button>
                            </>
                        )
                    }
                </div>



            </div> :
            <div className="min-h-64 bg-19 p-14 flex justify-center flex-col mt-74 relative">
                <h1 className={`titleLine big`}>سبد خرید خالی است</h1>
            </div>

    )
}
