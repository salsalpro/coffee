import React from 'react'
import SendTicket from '@/src/components/module/UserPanel/Tickets/SendTicket/SendTicket'
import UserPanelLayout from '@/src/components/layouts/UserPanelLayout'
import Link from 'next/link'


export default async function SendTicketParent() {

  return (
    <UserPanelLayout >
      <div className="parent">
      <Link href={'./'} className="rounded border-D3AD7F w-40 p-2 text-center mt-6 mx-auto block" >همه تیکت ها</Link>
        <h2 className="titleLine mt-6">ارسال تیکت</h2>
        <SendTicket />
      </div>
    </UserPanelLayout>
  )
}
