import Link from "next/link";
import { FaComments, FaUsers } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import LogoutLink from "../panel/Logout";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";

export default async function Sidebar({username}) {


    return (
        <div className="parent bg-black min-h-screen fixed top-0 right-0">
            <div className="w-64 bg-black">
                <h2 className="title text-md text-center text-white mb-5 py-5 "> {username}  عریز خوش اومدی </h2>
                <ul className="flex justify-center items-start flex-col pt-6">
                <li className="link flex pr-3 mb-6">
                        <IoHome color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/'} className=" text-white text-md mr-3">سایت</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <LuLayoutPanelLeft color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/p_admin'} className=" text-white text-md mr-3">پنل مدیریت</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <FaShoppingBag  color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/p_admin/products'} className=" text-white text-md mr-3">محصولات</Link>
                    </li>
                    {/* <li className="link flex pr-3 mb-6">
                        <FaShoppingBag  color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/p_admin/orders'} className=" text-white text-md mr-3">سفارشات</Link>
                    </li> */}
                    <li className="link flex pr-3 mb-6">
                        <FaUsers  color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/p_admin/users'} className=" text-white text-md mr-3">کاربران</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <RiMessage3Fill color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/p_admin/tickets'} className=" text-white text-md mr-3">تیکت دریافتی</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <FaComments color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/p_admin/comments'} className=" text-white text-md mr-3">نظر ها</Link>
                    </li>
                    <li className="link flex pr-3 mb-6">
                        <CiBadgeDollar color="#D3AD7F" size={21} className="mr-3" />
                        <Link href={'/p_admin/discount'} className=" text-white text-md mr-3">تخفیف</Link>
                    </li>
                    <LogoutLink />
                </ul>
            </div>
        </div>
    )
}
