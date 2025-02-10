import Link from 'next/link'
import React from 'react'

export default function Ticket({createdAt , _id,title , department , hasAwnser}) {


    return (
        <div className="Ticket bx-shadow-less mb-6">
                    <div className="Ticket rounded p-5 w-full text-D3AD7F bg-black border-D3AD7F grid grid-cols-2">
                        <div className="info flex flex-col col-span-1">
                            <Link href={`/p_user/tickets/awnser/${_id}`} className="title text-xl text-ellipsis overflow-hidden whitespace-no-wrap mb-4">{title}</Link>
                            <h3 className="title text-md text-ellipsis overflow-hidden whitespace-no-wrap bg-transparent border-D3AD7F py-2 select-none px-3 rounded w-auto block ml-auto">{department.title}</h3>
                        </div>
                        <div className="info flex flex-col col-span-1">
                            <span className='date text-white text-left p-3 pl-0 select-none'>{new Date(createdAt).toLocaleString('fa-IR')}</span>
                            <span className={`date mr-auto py-2 select-none ${hasAwnser ? 'text-green-500' : 'text-red-500'} `} > {hasAwnser ? 'پاسخ داده شده' : 'پاسخ داده نشده'}</span>
                        </div>
                    </div>
            </div>
    )
}
