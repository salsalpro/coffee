
import SubDepartmentModel from "@/models/SubDepartment"
import connectToDB from "@/config/db"

export async function GET(req , {params}) {

    const department = params.id

    if (!department) {
        return Response.json({ message: 'department is undifind' }, { status: 422 })
    }
    
    await connectToDB()
    const subDepartments = await SubDepartmentModel.find({ department }, '-__v')
    return Response.json(subDepartments)
}