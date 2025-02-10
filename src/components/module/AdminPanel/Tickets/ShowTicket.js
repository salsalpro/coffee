'use client'
import { showSwal } from '@/src/utils/helpers'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs'

export default function ShowTciket({body}) {

    const showTciketHandeler = () => {
        showSwal(body , '' , 'ادامه')
    }

    return <td className="py-3 text-center px-4 border border-[#938E8E] w-10" onClick={showTciketHandeler}><button className="bg-white px-3 py-1 rounded"><BsEyeFill color='#D3AD7F' /></button></td>
}
