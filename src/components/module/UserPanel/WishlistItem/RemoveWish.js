'use client'
import { showSwal } from '@/src/utils/helpers';
import { useRouter } from 'next/navigation'; 
import { useState, useTransition } from 'react';
import { IoTrashSharp } from 'react-icons/io5';
import swal from "sweetalert"



export default function RemoveWish({ userID, productID }) {

    const [isPending , startTransition] = useTransition()
    const [isFetching , setIsFetching] = useState(false)
    const router = useRouter()


    const RemoveWishFromWishlist = () => {
        swal({ title: 'میخواهید این محصول را از علاقه مندی های خود بردارید ؟', icon: 'warning', buttons: ['خیر', 'بله'] })
            .then(async result => {
                if (result) {
                    try{
                        setIsFetching(true)
                        const wish = { user:userID, product:productID }
                        const res = await fetch(`http://localhost:3000/api/wishlist`, {
                            method: 'DELETE',
                            body: JSON.stringify({ ...wish })
                        })
                        if (res.status === 200) {
                            return showSwal('از علاقه مندی های شما حذف شد' , 'success' , 'ادامه')
                        }
                    } catch (err){
                        console.error("خطا در حذف علاقه‌مندی:", err);
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




    return <IoTrashSharp className={`mx-1 cursor-pointer`} color='#D3AD7F'  onClick={isPending || isFetching ? null : RemoveWishFromWishlist}/>
}
