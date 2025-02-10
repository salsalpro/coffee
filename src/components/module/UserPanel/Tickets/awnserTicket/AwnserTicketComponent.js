import Awnser from './Awnser'


export default function AwnserTicketComponent({ Ticket, AwnserTicket }) {



  return (
    <div className='mb-3 px-6'>
      <Awnser {...Ticket} is_A_Ticket={Ticket} />


      {
        AwnserTicket ? <Awnser {...AwnserTicket} is_A_Ticket={false} /> : <h3 className="name text-md text-left border-D3AD7F text-D3AD7F py-2 px-3 mr-auto rounded min-w-[220px] w-fit max-w-[700px]">هنوز پاسخی از سرور نیامده است</h3>
      }

    </div>
  )
}
