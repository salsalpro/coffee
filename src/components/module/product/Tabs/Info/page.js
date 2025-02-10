import React from 'react'

export default function Info({product}) {
  return (
    <div className='text-white'>
    <p className='mb-3 pb-3 border-b w-1/2 mx-auto'>اطلاعات بیشتر :</p>
    <main className='w-1/2 mx-auto'>
      <div className='flex justify-between mb-3 bg-19 rounded-xl bx-shadow-less p-3'>
        <p>وزن</p>
        <p>{product.weight ? product.smell : 'نا نوشته'} گرم</p>
      </div>
      <div className='flex justify-between mb-3 bg-19 rounded-xl bx-shadow-less p-3'>
        <p>مناسب برای</p>
        <p>{product.suitableFor ? product.smell : 'نا نوشته'}</p>
      </div>
      <div className='flex justify-between mb-3 bg-19 rounded-xl bx-shadow-less p-3'>
        <p>میزان بو</p>
        <p>{product.smell ? product.smell : 'نا نوشته'}</p>
      </div>
    </main>
  </div>
  )
}
