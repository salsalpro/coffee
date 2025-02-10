import React from 'react'
import UserPanelLayout from '@/src/components/layouts/UserPanelLayout'
import InfoBox from '@/src/components/module/UserPanel/InfoBox/InfoBox'
import { FaComments, FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import TicketBox from '@/src/components/module/UserPanel/TicketBox/TicketBox';
import Orders from '@/src/components/module/UserPanel/OrdersBox/Orders';
import WishlistModel from '@/models/Wishlist';
import { AuthUser } from '@/src/utils/serverHelpers';
import CommentModel from '@/models/Comment';
import TicketModel from '@/models/Ticket';
import { redirect } from 'next/navigation';



export default async function p_user() {

  const user = await AuthUser()

  if(!user){
    return redirect('/auth')
  }

  console.log('user => ' , user)

  const wishs = await WishlistModel.countDocuments({user})
  const comments = await CommentModel.countDocuments({wroter:user._id})
  const tickets = await TicketModel.countDocuments({user , isAwnser:false})

  return (
    <UserPanelLayout >
      <div className="parent">
        <h2 className="titleLine mt-6">پنل کاربری</h2>
        <div className="boxs grid grid-cols-4 gap-6 mb-6">
          <InfoBox value={wishs} title={'علاقه مندی'} icon={<FaHeart size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
          <InfoBox value={comments} title={'نظر '} icon={<FaComments size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
          <InfoBox value={123} title={'سفارش'} icon={<IoBag size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
          <InfoBox value={tickets} title={'تیکت'} icon={<RiMessage3Fill size={23} className='rounded-full bg-D3AD7F w-12 h-12 p-2' color='#fff' />} />
        </div>
        <div className="boxs grid grid-cols-2 gap-6 mb-6">
          <TicketBox />
          <Orders lastOrders={0} />
        </div>
      </div>
    </UserPanelLayout>
  )
}
