'use client'
import { showSwal } from '@/src/utils/helpers'
import React from 'react'
import { FaPen } from 'react-icons/fa'

export default function UserEdite({body}) {

    const showComment = () => {
        showSwal(body , 'ادامه')
    }

    return <td className="py-3 text-center px-4 border border-[#938E8E] col-span-1 w-10"><button className="bg-white px-3 py-1 rounded"><FaPen color='#D3AD7F' onClick={showComment} /></button></td>
}
