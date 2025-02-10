import Image from "next/image";
import { FaCheck, FaTimes } from "react-icons/fa";

export default async function Order({ lastTickets }) {

    return (
        <div className="Ticket bg-D3AD7F rounded-sm p-3 mb-3">
            <div className="flex justify-between mb-3">
                <div className="flex items-center">
                    <Image src={'/coffee/coffee-4.png'} width={40} height={40} alt="coffee" className="mx-1 rounded-full h-10 w-10 object-cover" />
                    <p className="text-md text-white mx-1">قهوه عربیکا</p>
                </div>
                <span className="text-md text-white">1403/10/9</span>
            </div>
            <div className="flex justify-between">
                <div className="text-md text-white">تکمیل شده</div>
                <span className="text-md text-white flex">
                    <span className="mx-1">120,000 تومان</span>
                </span>
            </div>
        </div>
    )
}
