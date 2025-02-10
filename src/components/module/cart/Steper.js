import { MdArrowLeft } from "react-icons/md";


export default function Steper({ step }) {
    
    

    return (
        <div className="w-full border-rounded bg-D3AD7F p-3 text-stone flex justify-center mb-6">
            <li className="flex">
                <span className={`${step === 'cart' ? 'text-stone-50' : 'text-stone-300'}`}> سبد خرید</span>
                <MdArrowLeft className={`${step === 'cart' ? 'text-stone-50' : 'text-stone-300'}`} size={26} />
            </li>
            <li className="flex">
                <span className={`${step === 'pay' ? 'text-stone-50' : 'text-stone-300'}`} > پرداخت</span>
                <MdArrowLeft className={`${step === 'pay' ? 'text-stone-50' : 'text-stone-300'}`} size={26} />
            </li>
            <span className={`${step === 'compelte' ? 'text-stone-50' : 'text-stone-300'}`} > تکمیل سفارش</span>
        </div>
    )
}
