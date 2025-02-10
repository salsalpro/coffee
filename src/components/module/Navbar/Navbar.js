'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'

import { MdKeyboardArrowDown } from "react-icons/md";

import Link from 'next/link';
import ButtonFill from '../Button/ButtonFill';
import { usePathname } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';


export default function Navbar({ with_bg }) {

    const [fixTop, setFixTop] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {

        const fixNavbarToTop = (e) => {
            const currentScroll = window.pageYOffset

            if (currentScroll > 100) {
                setFixTop(true)
            } else {
                setFixTop(false)
            }
        }
        window.addEventListener('scroll', fixNavbarToTop)
        return () => window.removeEventListener('scroll', fixNavbarToTop)
    }, [])

    const pathname = usePathname();

    useEffect(() => {
        const GetMe = async () => {
            const res = await fetch('/api/me')
            if (res.status === 200) {
                const { user } = await res.json()
                console.log(user.role)
                setUser({ ...user })
            }

            if (res.status === 401) {
                const res = await fetch('/api/auth/refresh')
                if (res.status === 401) {
                    return
                }
                if (res.status === 200) {
                    GetMe()
                }
            }

        }

        GetMe()
    }, [])

    /// mobile = >
    const [mobileMenuShow, setMobileMenuShow] = useState(false)
    const [mobileMenuDropDownShow, setMobileMenuDropDownShow] = useState(false)

    return (
        <>
            <nav className={`${fixTop ? 'fixed transition-all-ease-05 bg-black' : 'absolute'} ${with_bg ? `fixed transition-all-ease-05 bg-black absolute` : ''} py-[0.37rem] px-3 top-0 w-full transition-all-ease-05 z-999999 hidden lg:block`} >
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-2">
                            <div className={`w-full flex justify-center`}>
                                <Image src='/logo1.png' className='w-10 h-10 object-contain ' alt='logo' width={40} height={40} />
                            </div>
                        </div>
                        <div className="col-span-8">
                            <ul className={`flex justify-center py-4 px-0`}>

                                <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/' ? 'text-D3AD7F' : 'text-white'}`} href="/" >صفحه اصلی</Link>
                                <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/about' ? 'text-D3AD7F' : 'text-white'}`} href="/about" >درباره ما</Link>


                                <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/contact' ? 'text-D3AD7F' : 'text-white'}`} href="/contact" >ارتباط با ما</Link>


                                <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/blog' ? 'text-D3AD7F' : 'text-white'}`} href="/blog" >وبلاگ</Link>


                                <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/rules' ? 'text-D3AD7F' : 'text-white'}`} href="/rules" >قوانین</Link>


                                <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/shop' ? 'text-D3AD7F' : 'text-white'}`} href="/shop" >فروشگاه</Link>



                                {
                                    user.username && !(user.role === 'ADMIN') && (
                                        <div className={`${styles.dropdown} inline-block relative pr-5`}>
                                            <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon} absolute right-2 transition-all-ease-03 text-white top-3`} />


                                            <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold' href="/p_user" >حساب کاربری</Link>


                                            <div className={` ${styles.dropdown_content} bg-white p-1 rounded-md flex text-right flex-col absolute top-9 right-1 transition-all-ease-03 opacity-0 invisible`}>
                                                {/* <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_user/orders" >سفارشات</Link>
                                            </li> */}
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_user/tickets" >تیکت</Link>
                                                </li>
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_user/comments" >نظر ها</Link>
                                                </li>
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_user/wishlist" > علاقه مندی ها</Link>
                                                </li>
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_user/details" >جزئیان اکانت</Link>
                                                </li>
                                            </div>

                                        </div>
                                    )
                                }

                                {
                                    user.username && (user.role === 'ADMIN') && (
                                        <div className={`${styles.dropdown} inline-block relative pr-5`}>
                                            <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon} absolute right-2 transition-all-ease-03 text-white top-3`} />


                                            <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold' href="/p_admin" >حساب مدیر</Link>


                                            <div className={` ${styles.dropdown_content} bg-white p-1 rounded-md flex text-right flex-col absolute top-9 right-1 transition-all-ease-03 opacity-0 invisible`}>
                                                {/* <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_admin/orders" >سفارشات</Link>
                                            </li> */}
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_admin/products" >محصولات</Link>
                                                </li>
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_user/tickets" >تیکت ها</Link>
                                                </li>
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_admin/comments" >نظر ها</Link>
                                                </li>
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_admin/users" >کاربران</Link>
                                                </li>
                                                <li className={`${styles.li_menu} relative bg-D3AD7F py-3 pr-5 pl-5 w-48 `}>
                                                    <MdKeyboardArrowDown size={13} className={`${styles.dropdown_icon_menu} absolute right-2 transition-all-ease-03 text-white`} />
                                                    <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold transition-all-ease-05' href="/p_admin/discount" >تخفیفات</Link>
                                                </li>
                                            </div>

                                        </div>

                                    )
                                }

                                {
                                    !user.username && <Link className='LinkItem w-auto text-white py-1 px-3 relative block font-bold' href="/auth" > ورود / ثبت نام</Link>
                                }

                            </ul>
                        </div>
                        <div className="col-span-2">
                            <div className={` flex justify-center items-center`}>
                                <ButtonFill href='/shop' title='رزرو میز ' />
                                {/* <Link href='/cart' className={` relative w-10 h-10 flex justify-center items-center`}>
                                <CiShoppingBasket className={` cursor-pointer text-D3AD7F`} size={20} />
                                <span className={`shoping_icons_number rounded-full top-5 mr-4 text-xs bg-white text-D3AD7F absolute text-center`}>4</span>
                            </Link>
                            <Link href='/wishlist' className={` relative w-10 h-10 flex justify-center items-center`}>
                                <FaRegHeart className={`cursor-pointer text-D3AD7F`} size={17} />
                                <span className={`shoping_icons_number rounded-full top-5 mr-4 text-xs bg-white text-D3AD7F absolute text-center`}>4</span>
                            </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            <div className={`fixed transition-all-ease-05 bg-black top-0 w-full transition-all-ease-05 z-999999 py-[1.053rem] px-14 block lg:hidden flex justify-between`}>
                <div className="menu flex justify-right items-center" onClick={e => setMobileMenuShow(!mobileMenuShow)}>
                    <IoMenu color='#D3AD7F' size={28} />
                </div>
                <div className={`flex justify-center min-w-6`}>
                    <Image src='/logo1.png' className='w-8 h-8 object-contain ' alt='logo' width={40} height={40} />
                </div>
                <div className="flex justify-left">
                    <div className={` flex justify-center items-center`}>
                        <ButtonFill href='/shop' title='رزرو میز ' />
                        {/* <Link href='/cart' className={` relative w-10 h-10 flex justify-center items-center`}>
                                <CiShoppingBasket className={` cursor-pointer text-D3AD7F`} size={20} />
                                <span className={`shoping_icons_number rounded-full top-5 mr-4 text-xs bg-white text-D3AD7F absolute text-center`}>4</span>
                            </Link>
                            <Link href='/wishlist' className={` relative w-10 h-10 flex justify-center items-center`}>
                                <FaRegHeart className={`cursor-pointer text-D3AD7F`} size={17} />
                                <span className={`shoping_icons_number rounded-full top-5 mr-4 text-xs bg-white text-D3AD7F absolute text-center`}>4</span>
                            </Link> */}
                    </div>
                </div>
            </div>
            <div className={`navbar_in_mobile block lg:hidden bg-19 p-3 fixed top-0 bottom transition-all-ease-05 bg-black w-96 h-screen overflow-y-auto z-999999 ${mobileMenuShow ? 'right-0' : 'right-[-24rem]'}`}>
                <div className="close flex justify-between px-3">
                    <div className={`flex justify-center min-w-6`}>
                        <Image src='/logo1.png' className='w-8 h-8 object-contain ' alt='logo' width={40} height={40} />
                    </div>
                    <div className="menu flex justify-right items-center" onClick={e => setMobileMenuShow(false)}>
                        <FaTimes color='#D3AD7F' size={28} />
                    </div>
                </div>
                <ul className={`flex flex-col justify-start py-4 px-0`}>

                    {
                        user.username && !(user.role === 'ADMIN') && (
                            <>
                                <Link className='LinkItem w-auto text-D3AD7F py-1 px-3 font-bold mb-3' href="/p_user" >حساب کاربری</Link>

                                <div className={` p-1 flex text-right flex-col  top-9 right-1 pr-3 mb-5`}>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_user/orders" >سفارشات</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_user/tickets" >تیکت</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_user/comments" >نظر ها</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_user/wishlist" > علاقه مندی ها</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_user/details" >جزئیان اکانت</Link>
                                </div>

                            </>
                        )
                    }

                    {
                        user.username && (user.role === 'ADMIN') && (
                            <>
                                <Link className='LinkItem w-auto text-D3AD7F py-1 px-3 font-bold mb-3' href="/p_admin" >حساب مدیر</Link>
                                <div className={`p-1 flex text-right pr-3 flex-col top-9 right-1 mb-5`}>
                                    {/* <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_admin/orders" >سفارشات</Link> */}
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_admin/products" >محصولات</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_user/tickets" >تیکت ها</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_admin/comments" >نظر ها</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_admin/users" >کاربران</Link>
                                    <Link className='LinkItem w-auto text-white py-1 px-3 font-bold mb-1' href="/p_admin/discount" >تخفیفات</Link>
                                </div>
                            </>
                        )
                    }

                    {
                        !user.username && <Link className='LinkItem w-auto text-D3AD7F py-1 px-3 font-bold mb-3 pr-3' href="/auth" > ورود / ثبت نام</Link>
                    }



                    <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/' ? 'text-D3AD7F' : 'text-white'}`} href="/" >صفحه اصلی</Link>
                    <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/about' ? 'text-D3AD7F' : 'text-white'}`} href="/about" >درباره ما</Link>
                    <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/contact' ? 'text-D3AD7F' : 'text-white'}`} href="/contact" >ارتباط با ما</Link>
                    <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/blog' ? 'text-D3AD7F' : 'text-white'}`} href="/blog" >وبلاگ</Link>
                    <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/rules' ? 'text-D3AD7F' : 'text-white'}`} href="/rules" >قوانین</Link>
                    <Link className={`LinkItem w-auto py-1 px-3 relative block font-bold ${pathname === '/shop' ? 'text-D3AD7F' : 'text-white'}`} href="/shop" >فروشگاه</Link>
                </ul>
            </div>
        </>
    )
}

