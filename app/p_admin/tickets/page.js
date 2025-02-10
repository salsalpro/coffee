import React from 'react'
import Link from 'next/link'
import connectToDB from '@/config/db'
import TicketModel from '@/models/Ticket'
import AllTickets from '@/src/components/module/AdminPanel/Tickets/AllTickets/AllTickets'
import AdminPanelLayout from '@/src/components/layouts/AdminPanelLayout'


export default async function AllTicketsParent() {
  
  await connectToDB()
  const TicketsGot = await TicketModel.find({isAwnser:false}).populate('department _id' , '-__v ').populate('subDepartment _id' , '-__v').populate('user' , 'phone username')
  .sort({createdAt:-1})
  
  const Tickets = JSON.parse(JSON.stringify(TicketsGot))

  return (
    <AdminPanelLayout >
      <div className="parent min-h-[85vh]">
        <h2 className="titleLine mt-6">تیکت ها</h2>
        <AllTickets Tickets={Tickets} />
      </div>
    </AdminPanelLayout>
  )
}
