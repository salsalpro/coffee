import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';


export default function Footer() {
  return (
    <div className={`footer_parent grid grid-cols-4 w-full py-10 px-0 relative pb-20`}>
      <div className={`mx-10 col-span-1 block relative text-white z-10`}>
        <div className={`logo_AboutLogo flex justify-around w-full mb-6`}>
          <Image alt='logo' width={95} height={87} src={`/logo1.png`} className={`mx-3 object-contain`} />
          <p className={`info text-938E8E text-xs text-justify`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        </div>
        <p className={`desc d-block w-full text-xs text-938E8E text-xs text-justify mb-6`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
        <div className={`social_links`}>
          <Link href={`https://www.instagram.com/salsal.pro`} target='_blank' className={`inline-block mx-2 `} >
            <FaInstagram color='#D3AD7F' size={19} />
          </Link>
          <Link href={`https://www.instagram.com/salsal.pro`} target='_blank' className={`inline-block mx-2 `} >
            <AiOutlineYoutube color='#D3AD7F' size={19} />
          </Link>
          <Link href={`https://www.instagram.com/salsal.pro`} target='_blank' className={`inline-block mx-2 `} >
            <FaFacebookF color='#D3AD7F' size={19} />
          </Link>

        </div>
      </div>
      <div className={`mx-10 col-span-1 block relative text-white z-10`}>
        <h3 className="title mb-3 block text-right text-lg ">لینک های مفید</h3>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} > سیاست حفظ حریم خصوصی </Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >مرجوع</Link>
        <Link href={`/rules`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >قوانین و ظوابت</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >نقشه سایت</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >اخرین اخبار</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >بلاگ</Link>
      </div>
      <div className={`mx-10 col-span-1 block relative text-white z-10`}>
        <h3 className="title mb-3 block text-right text-lg ">کمک به شما</h3>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >اکانت</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >بازیابی رمزعبور</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >ارتباط با ما</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >دریافت کمک</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >اطلاعات خرید</Link>
        <Link href={`/blog`} className={`text-938E8E text-xs block w-full mb-2 text-xs`} >جزئیات خرید</Link>
      </div>
      <div className={` mx-10 col-span-1 flex flex-col relative text-white z-10`}>
        <h3 className="title mb-6 block text-right text-lg ">عضویت و دریافت تخفیف</h3>
        <input type="email" className={`type_ text-right rounded p-2 text-black text-left mb-6 text-xs `} placeholder='ایمیل خود را وارد نمایید' />
        <button className={`py-1 px-3 rounded inline-block py-0 px-1 select-none outline-none bg-transparent border-D3AD7F text-white`}>عضویت</button>
      </div>
      <h3 className={`absolute w-full bottom-3 left-0 right-0 mx-auto my-0 text-center text-sm text-white z-10 block p-1 p-3`}>ساخته شده توسط محمد علی جوادی : 09925202638</h3>
    </div>
  )
}
