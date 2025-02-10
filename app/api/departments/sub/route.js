import connectToDB from "@/config/db"
import SubDepartmentModel from "@/models/SubDepartment"
import DepartmentModel from "@/models/Department"
import { isValidObjectId } from "mongoose"


export async function POST(req) {
    try {

        const admin = await AuthAdmin()
        if (!admin) {
            throw new Error('this api protect and you cant access it')
        }

        const body = await req.json()
        const { title: title1, department: department1 } = body

        const title = title1.trim('')
        const department = department1.trim('')

        if (!title) {
            return Response.json({ message: 'validation faild title is empity' }, { status: 422 })
        }

        if (!department) {
            return Response.json({ message: 'validation faild department is empity' }, { status: 422 })
        }

        const isDepartmentObjectID = isValidObjectId(department)
        if (!isDepartmentObjectID) {
            return Response.json({ message: 'validation faild department is not a object id' }, { status: 422 })
        }

        await connectToDB()

        const isDepartmentExsist = await DepartmentModel.findOne({ _id: department })
        if (!isDepartmentExsist) {
            return Response.json({ message: 'validation faild department is not exsist' }, { status: 422 })
        }

        const SubDepartment = await SubDepartmentModel.create({ title, department })

        if (SubDepartment) {
            return Response.json({ message: 'SubDepartment created succesfully' }, { status: 201 })
        }

        return Response.json({ message: 'something wnt wrong at creating SubDepartment' }, { status: 500 })

    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }

}

import { AuthAdmin } from "@/src/utils/serverHelpers"


export async function GET(req) {

    const { searchParams } = req.nextUrl

    const department = searchParams.get('department')

    if (!department) {
        return Response.json({ message: 'department is undifind' }, { status: 422 })
    }
    
    await connectToDB()
    const subDepartments = await SubDepartmentModel.find({ department }, '-__v')
    return Response.json(subDepartments)
}