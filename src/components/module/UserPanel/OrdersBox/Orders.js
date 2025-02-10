import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Order from "./Order";

export default async function Orders({ lastOrders }) {

    return (
        <div className="parent col-span-1 bg-19 bx-shadow-less rounded-lg p-3">
            <div className="top flex justify-between mb-3 pb-3 border-b-D3AD7F">
                <p className="text-md">محصولات اخیر</p>
                <Link href={''} className="flex">
                    <p className="text-md mx-2">همه محصولات</p>
                    <FaLongArrowAltLeft className="mx-2 relative top-px" color="#D3AD7F" size={19} />
                </Link>
            </div>
            <div className="body min-h-80">
                {
                    lastOrders.length ? (
                        <>
                            <Order />
                            <Order />
                            <Order />
                        </>
                    ) : (
                        <p className="text-xl h-full w-full flex justify-center items-center">هنوز محصولی وجود ندارد</p>
                    )
                }

            </div>
        </div>
    )
}
