import Link from "next/link";
import { FaComments, FaHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import LogoutLink from "../panel/Logout";
import { LuLayoutPanelLeft } from "react-icons/lu";

export default async function Sidebar({username}) {

    return (
        <div className="parent bg-black min-h-screen fixed top-0 right-0">
            <div className="w-64 bg-black">
                <h2 className="title text-md text-center text-white mb-5 py-5 ">  {username}  عریز خوش اومدی </h2>
                <ul className="flex justify-center items-start flex-col pt-6">
                <li className="link flex pr-3 mb-6">
                        <IoHome color="#D3AD7F" size={23} className="mr-3" />
                        <Link href={'/'} className=" text-white text-md mr-3">سایت</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <LuLayoutPanelLeft color="#D3AD7F" size={23} className="mr-3" />
                        <Link href={'/p_user'} className=" text-white text-md mr-3">پنل کاربری</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <FaShoppingBag  color="#D3AD7F" size={23} className="mr-3" />
                        <Link href={'/p_user/orders'} className=" text-white text-md mr-3">سفارش ها</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <RiMessage3Fill color="#D3AD7F" size={23} className="mr-3" />
                        <Link href={'/p_user/tickets'} className=" text-white text-md mr-3">تیکت های پشتیبانی</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <FaComments color="#D3AD7F" size={23} className="mr-3" />
                        <Link href={'/p_user/comments'} className=" text-white text-md mr-3">نظر ها</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <FaHeart color="#D3AD7F" size={23} className="mr-3" />
                        <Link href={'/p_user/wishlist'} className=" text-white text-md mr-3">علاقه مندی</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <TbListDetails color="#D3AD7F" size={23} className="mr-3" />
                        <Link href={'/p_user/details'} className=" text-white text-md mr-3">جزئیات</Link>
                    </li>
                    <LogoutLink />
                </ul>
            </div>
        </div>
    )
}
