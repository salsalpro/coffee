import connectToDB from "@/config/db"
import TicketModel from "@/models/Ticket"
import { AuthAdmin } from "@/src/utils/serverHelpers"


export async function POST(req) {
    const admin = await AuthAdmin()
    if (!admin) {
        return Response.json({ message: 'un authorize' }, { status: 403 })
    }

    try {

        const reqBody = await req.json()
        const { body, title, department, subDepartment, ticketID, priority } = reqBody

        if (!body) {
            return Response.json({ message: 'body is emipty' }, { status: 422 })
        }
        if (!title) {
            return Response.json({ message: 'title is emipty' }, { status: 422 })
        }
        if (!department) {
            return Response.json({ message: 'department is emipty' }, { status: 423 })
        }
        if (!subDepartment) {
            return Response.json({ message: 'subDepartment is emipty' }, { status: 422 })
        }
        if (!ticketID) {
            return Response.json({ message: 'ticketID is emipty' }, { status: 422 })
        }
        if (!priority) {
            return Response.json({ message: 'priority is emipty' }, { status: 422 })
        }

        const NewAwnserTicket = { body, title, department, subDepartment, priority, user: admin._id, isAwnser: true, hasAwnser: false, mainTicket: ticketID }

        await connectToDB()
        const AwnserTicket = TicketModel.create({ ...NewAwnserTicket })

        if (AwnserTicket) {

            await TicketModel.findOneAndUpdate({ _id: ticketID }, {
                $set: {
                    hasAwnser: true
                }
            })

            return Response.json({ message: 'Ticke saved successfuly' }, { status: 201 })
        }


        return Response.json({ message: 'Ticket did not saved successfuly' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }

}