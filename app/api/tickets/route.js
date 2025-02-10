import connectToDB from "@/config/db"
import TicketModel from "@/models/Ticket"
import { AuthUser } from "@/src/utils/serverHelpers"
import { isValidObjectId } from "mongoose"


export async function POST(req) {

    try {
        const user = await AuthUser()

        if (!user) {
            return Response.json({ message: 'you must log in first' }, { status: 401 })
        }

        const reqBody = await req.json()

        const { title: title1,
            body: body1,
            department: department1,
            subDepartment: subDepartment1,
            priority: priority1 } = reqBody

        const title = title1.trim('')
        const body = body1.trim('')
        const department = department1.trim('')
        const subDepartment = subDepartment1.trim('')
        const priority = priority1 > 3 || priority1 < 1 ? false : priority1

        if (!title) {
            return Response.json({ message: 'validation faild title is empity' }, { status: 422 })
        }
        if (!body) {
            return Response.json({ message: 'validation faild body is empity' }, { status: 422 })
        }
        if (!department) {
            return Response.json({ message: 'validation faild department is empity' }, { status: 422 })
        }
        if (!subDepartment) {
            return Response.json({ message: 'validation faild subDepartment is empity' }, { status: 422 })
        }
        if (!priority) {
            return Response.json({ message: 'validation faild priority is more than 3 or less than 1' }, { status: 422 })
        }


        const isDepartmentObjectID = isValidObjectId(department)
        if (!isDepartmentObjectID) {
            return Response.json({ message: 'validation faild department is not a object id' }, { status: 422 })
        }

        const isSubDepartmentObjectID = isValidObjectId(subDepartment)
        if (!isSubDepartmentObjectID) {
            return Response.json({ message: 'validation faild subDepartment is not a object id' }, { status: 422 })
        }

        const newTicket = { title, body, department, subDepartment, user:user._id, priority, hasAwnser:false  }


        await connectToDB()
        const Ticket = await TicketModel.create({ ...newTicket })

        if (Ticket) {
            return Response.json({ message: 'Ticket saved successfuly' }, { status: 201 })
        }

        return Response.json({ message: 'Ticket did not saved successfuly' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }

}