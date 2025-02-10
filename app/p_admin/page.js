import React from 'react'
import AdminPanelLayout from '@/src/components/layouts/AdminPanelLayout'
import InfoBox from '@/src/components/module/AdminPanel/InfoBox/InfoBox'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from 'react-icons/fa';
import { RiMessage3Fill } from "react-icons/ri";
import { AuthUser } from '@/src/utils/serverHelpers';
import TicketModel from '@/models/Ticket';
import UserModel from '@/models/User';
import ProductModel from '@/models/Product';
import Sale from '@/src/components/module/AdminPanel/Chart/Sale';
import Grow from '@/src/components/module/AdminPanel/Chart/Grow';



export default async function p_user() {

   const tickets = await TicketModel.countDocuments({}).sort({createdAt:-1})
   const users = await UserModel.countDocuments({})
   const products = await ProductModel.countDocuments({})


  return (
    <AdminPanelLayout >
      <div className="parent">
        <h2 className="titleLine mt-6">پنل کاربری</h2>
        <div className="boxs grid grid-cols-4 gap-6 mb-6">
          <InfoBox value={users} title={'تعداد کاربر ها'} icon={<FaHeart size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
          <InfoBox value={products} title={'تعداد محصولات سایت'} icon={<FaShoppingBag size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
          <InfoBox value={123} title={'سفارشات دریافتی'} icon={<FaShoppingBag size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
          <InfoBox value={tickets} title={'تیکت دریافتی'} icon={<RiMessage3Fill size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
        </div>
        <div className="boxs grid grid-cols-2 gap-10 mb-6">

          <section className='flex items-center flex-col '>
            <h4 className='mb-3 text-xl text-white'>آمار فروش</h4>
            <Sale />
          </section>
     
          <section className='flex items-center flex-col '>
            <h4 className='mb-3 text-xl text-white'>آمار رشد</h4>
            <Grow />
          </section>
        </div>
      </div>
    </AdminPanelLayout>
  )
}
