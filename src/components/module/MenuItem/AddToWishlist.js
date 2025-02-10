'use client'

import { showSwal } from "@/src/utils/helpers"
import { useEffect, useState } from "react"
import { FaRegHeart } from "react-icons/fa"


export default function AddToWishlist({productID}) {


    const [user , setUser] = useState({})

    useEffect(() => {
        const GetMe = async () => {
            const res = await fetch('/api/me')
            if(res.status === 200){
                const {user} = await res.json()
                setUser({...user})
            } 

            if(res.status === 401){
                const res = await fetch('/api/auth/refresh')
                if(res.status === 401){
                    return 
                }
                if(res.status === 200){
                    GetMe()
                }
            }

        }

        GetMe()
    } , [])

    const setToWishlist = async () => {
        const userID = user._id
        if(!userID){
            return showSwal('ابتدا وارد حساب خود شوید' , 'warning' , 'ادامه')
        }

        const wish = {user:user._id , product:productID}
        
        const res = await fetch('/api/wishlist' , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...wish})
        })
        

        if(res.status === 201){
            return showSwal('به علاقه مندی افزده شد' , 'success' , 'ادامه')
        }

        if(res.status === 409){
            return showSwal('علاقه مندی از قبل وجود دارد' , 'success' , 'ادامه')
        }

        return showSwal('معلوم نیست این بجه های سرور باز چی کردن ببخشید' , 'error' , 'ادامه')



    }

    return <FaRegHeart onClick={setToWishlist} className='mx-1 cursor-pointer' color='#D3AD7F' />
}