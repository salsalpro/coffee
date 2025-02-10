import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import styles from '../../../template/home/Contact/style.module.css'
import Link from 'next/link';

export default function ContactItems() {
  return (
    <div className={`${styles.itemsHandeler} flex justify-around my-0 mx-auto px-36`}>
      <Link href='tel:09925202638'>
        <div className={`w-60 h-auto bg-hover-19 rounded-md inline-block p-4 ${styles.item}`}>
          <div className={`${styles.iconParent} rounded-full mb-6 mx-auto`}>
          <FiPhoneCall color='#D3AD7F' className={`block my-0 mx-auto ${styles.itemIcon}`} size={28} />
          </div >
          <h2 className={`title text-base text-white block text-center mb-4 select-none`}>صحبت کنیم</h2>
          <p className={`text-xs text-938E8E text-xs mb-1 w-100 text-center select-none`}>
            تلفن : 09925202638
          </p>
          <p className={`text-xs text-938E8E text-xs mb-3 w-100 text-center select-none`}>
            ثابت : 02100000000
          </p>
        </div>
      </Link>
      <Link href='https://to.salsal.pro@gmail.com' target='blank'>
        <div className={`w-60 h-auto bg-hover-19 rounded-md inline-block p-4 ${styles.item}`}>
          <div className={`${styles.iconParent} rounded-full mb-6 mx-auto`}>
          <MdOutlineEmail color='#D3AD7F' className={`block my-0 mx-auto my-6 ${styles.itemIcon}`} size={28} />
          </div >
          <h2 className={`title text-base text-white block text-center mb-4 select-none`}>اطلاعات تیکت</h2>
          <p className={`text-xs text-938E8E text-xs mb-1 w-100 text-center select-none`}>
            email : to.salsal.pro@gmail.com
          </p>
          <p className={`text-xs text-938E8E text-xs mb-3 w-100 text-center select-none`}>
            info : info@salsal.pro
          </p>
        </div>
      </Link>
        <div className={`w-60 h-auto bg-hover-19 rounded-md inline-block p-4 ${styles.item}`}>
          <div className={`${styles.iconParent} rounded-full mb-6 mx-auto`}>
          <FaMapMarkerAlt color='#D3AD7F' className={`block my-0 mx-auto my-6 ${styles.itemIcon}`} size={28} />
          </div >
          <h2 className={`title text-base text-white block text-center mb-4 select-none`}>دفتر ما در</h2>
          <p className={`text-xs text-938E8E text-xs mb-1 w-100 text-center select-none`}>
            ایران , تهران ,  شهریار 
          </p>
          <p className={`text-xs text-938E8E text-xs mb-1 w-100 text-center select-none`}>
            مهدیه , خیابان صاحب الزمان
          </p>
        </div>
        <div className={`w-60 h-auto bg-hover-19 rounded-md inline-block p-4 ${styles.item}`}>
          <div className={`${styles.iconParent} rounded-full mb-6 mx-auto`}>
          <GiWorld color='#D3AD7F' className={`block my-0 mx-auto my-6 ${styles.itemIcon}`} size={28} />
          </div >
          <h2 className={`title text-base text-white block text-center mb-4 select-none`}>جزئیات مراسم</h2>
          <p className={`text-xs text-938E8E text-xs mb-1 w-100 text-center select-none`}>
            با شرکت کردن شما 
          </p>
          <p className={`text-xs text-938E8E text-xs mb-3 w-100 text-center select-none`}>
          میتونید باشید در اینجا
          </p>
        </div>
    </div>
  )
}
