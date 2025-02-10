'use client'
import { BsEyeFill } from "react-icons/bs"
import Link from "next/link"

export default function ShowDetails({ _id }) {

  return (
    <>

      <td className="py-3 text-center px-4 border border-[#938E8E] w-8" ><Link href={`/product/${_id}`} className="bg-white px-3 py-1 rounded whitespace-no-wrap block w-fit mx-auto"><BsEyeFill color='#D3AD7F' /></Link></td>

    </>
  )
}
