import React from 'react'
import Link from 'next/link'
import { FaRegStar } from "react-icons/fa";
import { ImStarFull } from 'react-icons/im';
import AddToWishlist from './AddToWishlist';
import AddToCart from './AddToCart';



export default function MenuItem({ img, name, shortDescription, price, _id, OffLink, score: scoreGot }) {
    const score = scoreGot ? scoreGot : 5

    const lessScore = Array.from(Array(5 - score).keys())

    const mapScore = Array.from(Array(score).keys())

    return (
        <div className={` col-span-1 flex items-center p-5 overflow-hidden border-b-605D5D max-height-[100.67px]`} >
            {
                OffLink ? (
                    <>
                        <div className="flex w-9/12">
                        <img src={img} alt="Americano" className={`w-[3.75rem] h-[3.75rem] rounded-full m-0 object-cover`} />
                        <div className={'overflow-hidden max-w-full my-0 px-10px flex flex-col justify-center'}>
                            <h3 className={'text-base m-0 text-D3AD7F whitespace-no-wrap overflow-hidden text-ellipsis mb-1'}>{name}</h3>
                            <p className={`ml-1 mr-0 my-0 text-sm text-938E8E text-xs text-ellipsis overflow-hidden whitespace-no-wrap `}>{shortDescription}</p>
                        </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-3/12">
                            <p className={`text-sm text-white mb-1`}> {price} تومان  </p>
                            <div className="scores flex justify-center mb-1">
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
                            <div className="AddToCartAndAddToWishlistBox flex">
                            <AddToWishlist productID={_id} />
                            <AddToCart productID={_id} price={price} name={name} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link href={`/product/${_id}`} className='w-9/12 flex'>
                            <img src={img} alt="Americano" className={`w-[3.75rem] h-[3.75rem] rounded-full m-0 object-cover`}/>
                            <div className={'overflow-hidden max-w-full my-0 px-10px flex flex-col justify-center w-10/12'}>
                                <h3 className={'text-base m-0 text-D3AD7F whitespace-no-wrap overflow-hidden text-ellipsis mb-1'}>{name}</h3>
                                <p className={`ml-1 mr-0 my-0 text-sm text-938E8E text-ellipsis overflow-hidden whitespace-no-wrap `}>{shortDescription}</p>
                            </div>
                        </Link>
                        <div className="AddToCartAndAddToWishlist flex flex-col items-center w-3/12">
                            <p className={`text-sm text-white mb-1`}> {price} تومان  </p>
                            <div className="scores flex justify-center mb-1">
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
                            <div className="AddToCartAndAddToWishlistBox flex">
                            <AddToWishlist productID={_id}/>
                            <AddToCart productID={_id} price={price} name={name} />
                            </div>
                            
                        </div>
                    </>
                )
            }
        </div>
    )
}
