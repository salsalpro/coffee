'use client'
import { showSwal } from "@/src/utils/helpers"
import { useState } from "react"

export default function AddToCart({ _id, name, price }) {


    // code
    const [count, setCount] = useState(1)

    const increase = () => {
        setCount(Prevecount => {
            return Prevecount + 1
        })
    }

    const decrease = () => {
        setCount(Prevecount => {
            if (Prevecount > 1) {
                return Prevecount - 1
            }
            return Prevecount
        })
    }

    const addTocartHandeler = async () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        if (cart.length > 0) {

            const IsIncart = cart?.some(item => item.id === _id)

            if (IsIncart) {
                cart.forEach(item => {
                    if (item.id === _id) {
                        return item.count = item.count + count
                    }
                    return item
                });
                localStorage.setItem('cart', JSON.stringify(cart))
                
                return showSwal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ادامه')
            }

            const cartItem = {
                id: _id,
                product: name,
                price,
                count
            }

            cart.push({ ...cartItem })

            localStorage.setItem('cart', JSON.stringify(cart))
            showSwal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ادامه')
        } else {
            const cartItem = {
                id: _id,
                product: name,
                price,
                count
            }

            cart.push({ ...cartItem })

            localStorage.setItem('cart', JSON.stringify(cart))
            showSwal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ادامه')
        }

        
    }


    return (
        <div className="addToShopingCartBox flex flex-right mb-6">
            <div className="count border text-white flex justify-evenly items-center ml-3 rounded">
                <div className="increase cursor-pointer border-l h-full my-auto text-center px-2 ml-3 flex items-center " onClick={increase}>+</div>
                {count}
                <div className="decrease cursor-pointer border-r h-full my-auto text-center px-2 mr-3 flex items-center " onClick={decrease}>-</div>
            </div>
            {/* {
                showBtn ? ( */}
                    <button className='addToShopingCart py-2 px-3 rounded border-D3AD7F text-D3AD7F mr-3' onClick={addTocartHandeler}> افزودن به سبد خرید</button>
               {/* ) : (
                   <button className='RemoveFromShopingCart py-2 px-3 rounded border-D3AD7F text-D3AD7F mr-3' onClick={RemoveFromCartHandeler}> حذف از سبد خرید</button>
               ) */}
        </div>
    )
}