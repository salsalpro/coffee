import React from 'react'

export default function Explain({product}) {
  return (
    <div className='text-white'>
      <p className='text-lg pb-3 mb-3 border-b'>توضیحات :</p>
      <p className='mb-3 bg-19 rounded-xl bx-shadow-less p-3 text-sm leading-loose'>{product.longDescription}</p>
    </div>
  )
}
