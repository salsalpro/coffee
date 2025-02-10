import React from 'react'
import Link from 'next/link'

export default function ButtonFill({title , href}) {
  return (
    <Link href={`${href ? href : ''}`} className={`py-2 px-3 rounded-md inline-block my-0 mx-1 z-50 relative select-none outline-none  text-white bg-D3AD7F`}>{title}</Link>
  )
}
