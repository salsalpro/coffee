import React from 'react'
import UserPanelLayout from '@/src/components/layouts/UserPanelLayout'
import Link from 'next/link'
import connectToDB from '@/config/db'
import TicketModel from '@/models/Ticket'
import { AuthUser } from '@/src/utils/serverHelpers'
import AllTickets from '@/src/components/module/UserPanel/Tickets/AllTickets/AllTickets'


export default async function AllTicketsParent() {
  
  await connectToDB()
  const user = await AuthUser()
  const TicketsGot = await TicketModel.find({user:user._id}).populate('department' , '-__v -_id')
  .sort({createdAt:-1})
  
  const Tickets = JSON.parse(JSON.stringify(TicketsGot))

  return (
    <UserPanelLayout >
      <div className="parent min-h-[85vh]">
        <Link href={'/p_user/tickets/sendticket'} className="rounded border-D3AD7F w-40 p-2 text-center mt-6 mx-auto block" >ارسال تیکت جدید</Link>
        <h2 className="titleLine mt-6">تیکت ها</h2>
        <AllTickets Tickets={Tickets} />
      </div>
    </UserPanelLayout>
  )
}
