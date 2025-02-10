import Image from 'next/image'
import React from 'react'

import { FaRegStar } from "react-icons/fa6";
import { ImStarFull } from "react-icons/im";

export default function Comment({ img, date, username, score , body }) {

    const lessScore = Array.from(Array(5 - score).keys())

    const mapScore = Array.from(Array(score).keys())

    return (
        <div className='rounded-lg bg-19 shadow-less mx-auto mb-3'>
            <div className="grid grid-cols-5 p-3">
                <Image className="image w-16 h-16 rounded-full col-span-1 mx-auto" src={img || '/users/nonePicUser1.png'} alt='user' width={120} height={120} />
                <div className="col-span-4">
                <div className="flex justify-between mb-3">
                        <span className="date text-white">{username} - {new Date(date).toLocaleDateString('fa-IR') }</span>
                        <div className="score flex">
                            {
                                mapScore.map(item => (
                                    <ImStarFull key={item} className='mx-1' color='#D3AD7F' />
                                ))
                            }

                            {
                                
                                lessScore.map(item => (
                                    <FaRegStar key={item} className='mx-1' color='#D3AD7F' />
                                ))
                            }
                        </div>
                    </div>
                    <p className="text-white leading-loose text-sm">{body}</p>
                </div>
            </div>
        </div>
    )
}
