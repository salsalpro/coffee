import Image from "next/image";
import { BsFillBellFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";


export default async function Topbar({ username }) {



    return (
        <nav className={`relative black py-1 px-3 top-0 w-full transition-all-ease-05 z-999999 bg-black`} >
            <div className="grid grid-cols-2 gap-4 items-center w-full py-2">
                <div className="col-span-1 flex flex-start">
                    <Image width={40} height={40} alt="user" src={'/users/nonePicUser1.png'} className="rounded-full w-10 w-10 block object-cover mx-1" />
                    <div className="infos flex flex-col mx-1">
                        <h3 className="text-white text-sm font-bold text-right ">{username}</h3>
                        <p className="role text-xs text-938E8E text-right ">مدیر</p>
                    </div>
                </div>
                <div className="col-span-1 flex justify-end">
                    <div className="mx-3 search bg-white rounded-md relative min-w-64">
                        <IoSearch size={23} color="#fff" className="w-8 h-8 cursor-pointer bg-D3AD7F p-1 rounded-full absolute left-1 my-auto top-0 bottom-0" />
                        <input type="text" className="bg-transparent type_ h-full w-full text-black px-3" placeholder="جستو جو کنید" />
                    </div>
                    <div className="notification bg-D3AD7F p-2 rounded-md mx-3 relative">
                        <BsFillBellFill size={23} color="#fff" />
                        <span className="absolute bottom-6 left-6 text-D3AD7F bg-white rounded-full px-2">0</span>
                    </div>
                </div>
            </div>
        </nav >
    )
}
