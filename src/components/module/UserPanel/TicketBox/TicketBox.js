import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Ticket from "./Ticket";
import connectToDB from "@/config/db";
import TicketModel from '@/models/Ticket'
import { AuthUser } from "@/src/utils/serverHelpers";

export default async function TicketsBox() {

    const user = await AuthUser()

    await connectToDB()
    const tickets = await TicketModel.find({user}).populate('department' , '-_id -__v')
    .sort({ createdAt: -1 })
    .limit(3)
    const lastTickets = JSON.parse(JSON.stringify(tickets))

    return (
        <div className="parent col-span-1 bg-19 bx-shadow-less rounded-lg p-3">
            <div className="top flex justify-between mb-3 pb-3 border-b-D3AD7F">
                <p className="text-md">تیکت های اخیر</p>
                <Link href={`/p_user/tickets`} className="flex">
                    <p className="text-md mx-2">همه تیکت ها</p>
                    <FaLongArrowAltLeft className="mx-2 relative top-px" color="#D3AD7F" size={19} />
                </Link>
            </div>
            <div className="body min-h-80">
                {
                    lastTickets.length ? (
                        <>
                        {
                            lastTickets.map(ticket => <Ticket key={ticket._id} {...ticket} /> ) //ticket.department.title
                        }
                        </>
                    ) : (
                        <p className="text-xl h-full w-full flex justify-center items-center">هنوز تیکتی وجود ندارد</p>
                    )
                }

            </div>
        </div>
    )
}
