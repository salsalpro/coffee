'use client'

import { showSwal } from "@/src/utils/helpers"
import { CiShoppingBasket } from "react-icons/ci"

export default function AddToCart() {


    const addTocartHandeler = async ({productID , price, name}) => {
        
        console.log('add to cart ')

        console.log('add to cart ' )

        const cart = JSON.parse(localStorage.getItem('cart')) || []

        if (cart.length > 0) {

            const IsIncart = cart?.some(item => item.id === productID)

            if (IsIncart) {
                cart.forEach(item => {
                    if (item.id === productID) {
                        return item.count = item.count + 1
                    }
                    return item
                });
                localStorage.setItem('cart', JSON.stringify(cart))
                return showSwal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ادامه')
            }

            const cartItem = {
                id: productID,
                product: name,
                price,
                count:1
            }

            cart.push({ ...cartItem })

            localStorage.setItem('cart', JSON.stringify(cart))
            showSwal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ادامه')
        } else {
            const cartItem = {
                id: productID,
                product: name,
                price,
                count:1
            }

            cart.push({ ...cartItem })

            localStorage.setItem('cart', JSON.stringify(cart))
            showSwal('محصول با موفقیت به سبد خرید اضافه شد', 'success', 'ادامه')
        }
    }


    return <CiShoppingBasket onClick={addTocartHandeler} className='mx-1 cursor-pointer' color='#D3AD7F' />
}