'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaComments } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa";
import { LuTextQuote } from "react-icons/lu";
import Explain from './Explain/page';
import Info from './Info/page';
import Comments from './Comments/Comments';


export default function Tabs({product}) {

    const [ActiveTab, setActiveTab] = useState('explain') // explain // info // comments 

    return (
        <div className='parent flex flex-col'>
            <ul className="navBar flex justify-center mb-6">
                <li onClick={e => setActiveTab('explain')} className={`mx-3 ${ActiveTab === 'explain' && 'active bg-19 rounded-full'} relative cursor-pointer text-white w-12 h-12 flex justify-center items-center relative bottom-px`}>
                    {
                        ActiveTab === 'explain' && (
                            <Image width={240} height={120} src="/coffee_tabs/circleMaker.png" alt="coffee" className='w-12 h-6 absolute top-0 right-less-31' />
                        )
                    }
                    <LuTextQuote color='#fff' fontSize={24} />
                    {
                        ActiveTab === 'explain' && (<Image width={240} height={120} src="/coffee_tabs/circleMaker.png" alt="coffee" className='w-12 h-6 absolute top-0 left-less-31 ' />)
                    }
                </li>
                <li onClick={e => setActiveTab('info')} className={`mx-3 ${ActiveTab === 'info' && 'active bg-19 rounded-full'} relative cursor-pointer text-white w-12 h-12 flex justify-center items-center relative bottom-px`}>
                    {
                        ActiveTab === 'info' && (
                            <Image width={240} height={120} src="/coffee_tabs/circleMaker.png" alt="coffee" className='w-12 h-6 absolute top-0 right-less-31' />
                        )
                    }
                    <FaInfo color='#fff' fontSize={24} />
                    {
                        ActiveTab === 'info' && (<Image width={240} height={120} src="/coffee_tabs/circleMaker.png" alt="coffee" className='w-12 h-6 absolute top-0 left-less-31 ' />)
                    }
                </li>
                <li onClick={e => setActiveTab('comments')} className={`mx-3 ${ActiveTab === 'comments' && 'active bg-19 rounded-full'} relative cursor-pointer text-white w-12 h-12 flex justify-center items-center relative bottom-px`}>
                    {
                        ActiveTab === 'comments' && (
                            <Image width={240} height={120} src="/coffee_tabs/circleMaker.png" alt="coffee" className='w-12 h-6 absolute top-0 right-less-31' />
                        )
                    }
                    <FaComments color='#fff' fontSize={24} />
                    {
                        ActiveTab === 'comments' && (<Image width={240} height={120} src="/coffee_tabs/circleMaker.png" alt="coffee" className='w-12 h-6 absolute top-0 left-less-31 ' />)
                    }
                </li>
            </ul>
            <div className="tab w-full">
                {
                    ActiveTab === 'explain' && (<Explain product={product} />)
                }
                {
                    ActiveTab === 'info' && (<Info product={product} />)
                }
                {
                    ActiveTab === 'comments' && (<Comments product={product} />)
                }
            </div>
        </div>
    )
}
