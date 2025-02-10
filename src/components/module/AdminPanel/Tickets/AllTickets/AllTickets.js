import UserBan from "../../UserBan"
import ShowTciket from "../ShowTicket"
import AwnserTciket from "../AwnserTicket"




export default function AllTickets({ Tickets }) {

  return (
    <div className='Tickets p-3'>

      {

        Tickets.length ?
          <table className="w-full text-center rounded-lg overflow-hidden mb-12">
            <thead className="bg-[#191919] text-[#D3AD7F]">
              <tr className="">
                {/* <th className="py-3 px-4 border border-[#938E8E]">شناسه</th> */}
                <th className="py-3 px-4 border border-[#938E8E]">کاربر</th>
                <th className="py-3 px-4 border border-[#938E8E]">عنوان</th>
                <th className="py-3 px-4 border border-[#938E8E]">دپارتمان</th>
                <th className="py-3 px-4 border border-[#938E8E]">مشاهده</th>
                <th className="py-3 px-4 border border-[#938E8E]">پاسخ</th>
                <th className=" border border-[#938E8E]">وضعیت</th>
                <th className=" border border-[#938E8E]">بن</th>
                <th className=" border border-[#938E8E]">اولویت</th>
              </tr>
            </thead>
            <tbody className='bg-[#101011]'>
              {

                Tickets.map(ticket => (
                  <tr className="hover:bg-[#191919] transition-all-ease-03" key={ticket._id}>
                    {/* <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-20 overflow-x-auto whitespace-no-wrap">{ticket._id}</td> */}
                    <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-32 overflow-x-auto whitespace-no-wrap">{ticket.user.username}</td>
                    <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-32 overflow-x-auto whitespace-no-wrap">{ticket.title}</td>
                    <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-20 overflow-x-auto whitespace-no-wrap">{ticket.department.title}</td>
                    <ShowTciket body={ticket.body} />
                    <AwnserTciket ticket={ticket} />
                    <td className={` text-center border border-[#938E8E] w-8 ${ticket.hasAwnser ? 'text-green-500' : 'text-red-500'}`}>{ticket.hasAwnser ? 'پاسخ' : 'نا پاسخ'}</td>
                    <UserBan username={ticket.user.username}  phone={ticket.user.phone} />
                    <td className={` text-center border border-[#938E8E] w-8`}>{ticket.priority}</td>
                  </tr>
                ))
              }
            </tbody>
          </table> : <p className='rounded p-5 w-full text-lg text-center text-white bg-D3AD7F '>هنوز تیکتی وجود ندارد</p>
      }

    </div>
  )
}
