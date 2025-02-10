import connectToDB from "@/config/db"
import { AuthAdmin, AuthUser } from "@/src/utils/serverHelpers"
import DepartmentModel from "@/models/Department"


export async function POST(req) {
    try {

        const admin = await AuthAdmin()
        if (!admin) {
            throw new Error('this api protect and you cant access it')
        }

        const body = await req.json()
        const { title: title1 } = body
        const user = AuthUser()

        const title = title1.trim('')

        if (!title) {
            return Response.json({ message: 'validation faild title is empity' }, { status: 422 })
        }

        await connectToDB()
        const department = await DepartmentModel.create({ title })

        if (department) {
            return Response.json({ message: 'department created succesfully' }, { status: 201 })
        }

        return Response.json({ message: 'something wnt wrong at creating department' }, { status: 500 })

    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }

}

export async function GET() {
    await connectToDB()
    const departments = await DepartmentModel.find({} , '-__v')
    return Response.json(departments)
}