import React from 'react'
import UserPanelLayout from '@/src/components/layouts/UserPanelLayout'
import Link from 'next/link'
import AwnserTicketComponent from '@/src/components/module/UserPanel/Tickets/awnserTicket/AwnserTicketComponent'
import connectToDB from '@/config/db'
import TicketModel from '@/models/Ticket'
import { redirect } from 'next/navigation'


export default async function awnser({ params }) {


  const paramsGot = await params
  const TicketID = await paramsGot?.id

  await connectToDB()
  const TicketGOT = await TicketModel.findOne({ _id: TicketID }).populate('user','role username')
  const Ticket = JSON.parse(JSON.stringify(TicketGOT))

  if(!Ticket){
    return redirect('/p_user/tikets')
  }

  const AwnserTicketGot = await TicketModel.findOne({mainTicket:Ticket._id , isAwnser:true}).populate('user','role username')
  const AwnserTicket = JSON.parse(JSON.stringify(AwnserTicketGot))

  return (
    <UserPanelLayout >
      <div className="parent min-h-[90vh]">
        <Link href={'/p_user/tickets'} className="rounded border-D3AD7F w-40 p-2 text-center mt-6 mx-auto block" >همه تیکت ها</Link>
        <h2 className="titleLine mt-6"><span className='text-ellipsis overflow-hidden whitespace-no-wrap w-[150px] block mx-auto'>{Ticket.title}</span></h2>
        <AwnserTicketComponent Ticket={Ticket} AwnserTicket={AwnserTicket} />
      </div>
    </UserPanelLayout>
  )
}
