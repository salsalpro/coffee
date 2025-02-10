import Link from "next/link";
import { FaCheck, FaTimes } from "react-icons/fa";

export default async function Ticket({ _id, createdAt, department, title, hasAwnser }) {


    return (
        <div className="Ticket bg-D3AD7F rounded-sm p-3 mb-3">
            <div className="flex justify-between mb-3">
                <Link href={`/p_user/tickets/awnser/${_id}`} className="text-md text-white">{title}</Link>
                <span className="text-md text-white">{new Date(createdAt).toLocaleString('fa-IR')}</span>
            </div>
            <div className="flex justify-between">
                <div className="text-md text-white border border-white py-2 px-3 rounded-sm">{department.title}</div>
                <span className="text-md text-white flex">
                    <span className={`mx-1 font-bold`}>{hasAwnser ? 'پاسخ داده شده' : 'پاسخ داده نشده'}</span>
                    {
                        hasAwnser ? (
                            <FaCheck size={16} className="mx-1 relative top-1" color="green" />
                        ) : (
                            <FaTimes size={16} className="mx-1 relative top-1" color="red" />
                        )
                    }
                </span>
            </div>
        </div>
    )
}
