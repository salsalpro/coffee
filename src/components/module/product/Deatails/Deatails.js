import React from 'react'

import { FaRegStar } from "react-icons/fa6";
import { ImStarFull } from "react-icons/im";

import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { MdOutlineCompare } from "react-icons/md";
import AddToWishlist from './AddToWishlist';
import AddToCart from './AddToCart';



export default async function Deatails({ product }) {
    const lessScore = Array.from(Array(5 - product.score).keys())
    const mapScore = Array.from(Array(product.score).keys())

    return (
        <>
            <div className="section border-b pb-6 mb-3">


                <div className="brodcast">

                </div>
                <h2 className="title text-2xl text-white mb-6">{product.name}</h2>
                <div className="users_score flex flex-right mb-6">
                    <div className="stars flex">

                        {
                            mapScore.map(item => (
                                <ImStarFull key={item} className='mx-1 relative top-1 cursor-pointer' color='#D3AD7F' />
                            ))
                        }

                        {

                            lessScore.map(item => (
                                <FaRegStar key={item} className='mx-1' color='#D3AD7F' />
                            ))
                        }
                    </div>
                    <p className="numberOfScoures mx-3 text-white">( رای دادن توسط {(product.comments.filter(comment => comment.isAccept)).length} نفر )</p>
                </div>
                <h3 className="price text-white text-2xl mb-6"> {product.price.toLocaleString()} تومان </h3>
                <p className="desc text-xs text-white">{product.shortDescription}</p>
            </div>
            <div className="section border-b pb-6 mb-6">
                <div className="have_in_stock flex flex-right mb-6">
                    <FaCheck className='icon mx-1' color='#D3AD7F' />
                    {/* <FaTimes className='icon mx-1' color='#D3AD7F' /> */}
                    <p className="text text-white text-xs mx-1">
                        در انبار موجود است
                    </p>

                    {/* <p className="text text-white text-xs mx-1">
        در انبار موجود نیست
      <p> */}
                </div>
                <AddToCart {...product} />
                <div className="addToVishlistAndCompare flex mb-6">
                    <AddToWishlist productID={product._id} />
                    <div className="compare mr-3 flex flex-right cursor-pointer">
                        <MdOutlineCompare className='icon mx-1' color='#D3AD7F' />
                        <p className="text text-white text-xs mx-1">مقایسه</p>
                    </div>
                </div>
            </div>
            <div className="section border-b pb-6 mb-6">
                <div className="identifire flex flex-right items-center h-4 mb-6">
                    <span className='text-white text-right text-sm font-bold'>شناسه محصول : </span>
                    <span className='text-white text-right mr-1 text-xs font-bold'>{product._id}</span>
                </div>
                {/* <div className="category flex flex-right items-center h-4 mb-6">
                    <span className='text-white text-right text-sm'>دسته بندی :</span>
                    <span className='text-white text-right mr-1 text-xs'>Premium Coffee, قهوه, محصولات ویژه, همه موارد</span>
                </div> */}
                <div className="tag flex flex-right items-center h-4">
                    <span className='text-white text-right text-sm'>برچسب :</span>
                    {
                        product.tags ? product.tags.map(tag => (
                            <span key={tag} className='text-white text-right mr-1 text-xs'>{tag} , </span>
                        ))
                        :
                        <span className='text-white text-right mr-1 text-xs'>برچسبی در نظر گرفته نشده</span>
                    }
                </div>
            </div>
        </>
    )
}
