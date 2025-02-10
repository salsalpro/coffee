'use client'
import { showSwal } from "@/src/utils/helpers"
import { useEffect, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

export default function AddToWishlist({ productID }) {

    const [user, setUser] = useState({})
    const [isInWishlist, setIsInWishlist] = useState(false)

    useEffect(() => {
        const GetMe = async () => {
            const res = await fetch('/api/me')
            if (res.status === 200) {
                const { user } = await res.json()
                setUser({ ...user })
            }

            if (res.status === 401) {
                const res = await fetch('/api/auth/refresh')
                if (res.status === 401) {
                    showSwal('شما باید لاگ این کنید', 'warning', 'ادامه')
                }
                if (res.status === 200) {
                    GetMe()
                }
            }

        }


        GetMe()
    }, [])

    const setToWishlist = async () => {

        if (!user._id) {
            return showSwal('برای افزودن به علاقه مندی ابتدا وارد شوید', 'warning', 'ورود / ثبت نام')
        }

        const userID = user._id

        const wish = {
            user: userID,
            product: productID
        }

        const res = await fetch('/api/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...wish })
        })

        if (res.status === 201) {
            setIsInWishlist(true)
            return showSwal('محصول به علاقه مندی اضافه شد', 'success', 'ادامه')
        }

        if (res.status === 409) {
            setIsInWishlist(true)
            return showSwal(' از قبل در علاقه مندی های شما وجود دارد', 'success', 'ادامه')
        }

    }

    return (
        <div className="addToVishlist flex flex-right cursor-pointer ml-3" onClick={setToWishlist}>
            {
                isInWishlist ? (
                    <FaHeart className='icon mx-1' color='#D3AD7F' />
                ) : (
                    <FaRegHeart className='icon mx-1' color='#D3AD7F' />
                )
            }
            <p className="text text-white text-xs mx-1">افزودن به علاقه مندی</p>
        </div>
    )
}