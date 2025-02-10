import Image from 'next/image'
import React from 'react'
import Navbar from '@/src/components/module/Navbar/Navbar'
import Footer from '@/src/components/module/Footer/Footer'

export default async function Not_found() {


  return (<>
    <div className='w-full h-full '>
      <Navbar with_bg={true} />
      <div className="flex justify-center items-center mt-16 h-96 bg-D3AD7F pt-14">
        <h2 className='text-9xl mx-3 relative text-white'>4</h2>
        <div className="image flex justify-center flex-col">
          <Image width={375} height={375} alt='404' src={'/coffee/404.png'} className='rounded-full h-32 w-32 mx-3 mx-auto' />
          <h2 className="title text-white text-2xl text-center mt-6">این صفحه وجود ندارد</h2>
        </div>
        <h2 className='text-9xl mx-3 relative text-white'>4</h2>
      </div>
      <Footer />
    </div>
  </>
  )
}
