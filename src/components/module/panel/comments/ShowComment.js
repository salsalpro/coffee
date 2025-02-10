'use client'
import { showSwal } from '@/src/utils/helpers'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs'

export default function ShowComment({body}) {

    const showComment = () => {
        showSwal(body , '' , 'ادامه')
    }

    return <td className="py-3 text-center px-4 border border-[#938E8E] w-12" onClick={showComment}><button className="bg-white px-3 py-1 rounded"><BsEyeFill color='#D3AD7F' /></button></td>
}
