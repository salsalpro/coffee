'use client'
import swal from 'sweetalert'
import React from 'react'
import { IoLogOut } from 'react-icons/io5'
import { redirect } from 'next/navigation'
import { showSwal } from '@/src/utils/helpers'

export default function LogoutLink({ body }) {

    const logout = async () => {

        swal({ title: 'از خروج اطمینان دارید ؟', icon: 'warning', buttons: ['خیر', 'بله'] })
            .then(async result => {
                if (result) {
                    const res = await fetch(`/api/auth/logout`)
                    showSwal('خارج شدید' , 'success' , 'ادامه')
                    redirect('/')
                }
            })





    }



    return (
        <li className="cursor-pointer link flex pr-3 mb-6" onClick={logout}>
            <IoLogOut color="#D3AD7F" size={23} className="mr-3" />
            <div className=" text-white text-md mr-3">خروج</div>
        </li>
    )
}
