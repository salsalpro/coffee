import React from 'react'
import Image from 'next/image'
import PopulerMenu from '@/src/components/module/home/PopulerMenu/PopulerMenu'
import { Bebas_Neue } from 'next/font/google'

const BoldFont = Bebas_Neue({ 
  subsets: ['latin'] ,
  weight:'400'
})

export default function PopulerMenuParent() {
  return (
    <div className={`w-full bg-19 py-[70px] px-[10px] relative`}>
      <div className={`grid grid-cols-12 gap-4 items-center relative top-[-144px] w-full`}>
        <div className="col-span-3 flex justify-center relative">
          <Image loading='eager' src='/coffee/coffeeOnSpace1.svg' width={172} height={115} alt='coffee' className={`-rotate-90 relative object-contain w-[172px] h-[115px] z-[1] top-[14px] right-0 left-0 mx-auto   `} />
        </div>
        <div className="col-span-6 flex justify-center align-center relative h-4">
          <h2 className={`${BoldFont.className} absolute text-white left-0 right-0 mx-auto text-center text-[130px] top-[-75px]`}>coffee Shop</h2>
          <Image loading='eager' src='/coffee/coffeeUpOnlyWithplate.svg' width={415} height={410} alt='coffee' className={` absolute top-[-120px] right-0 left-[50px] mx-auto w-[305px] h-[300px] z-[2]`} />
        </div>
        <div className="col-span-3 flex justify-center relative">
        <Image loading='eager' src='/coffee/coffeeOnSpace2.svg' width={172} height={115} alt='coffee' className={`relative object-contain w-[172px] h-[115px] z-[1] top-[14px] right-0 left-0 mx-auto    rotate-90`}/>
        </div>
      </div>
      <PopulerMenu />
    </div>
  )
}
