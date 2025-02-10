import connectToDB from "@/config/db"
import UserModel from "@/models/User"
import { AuthAdmin } from "@/src/utils/serverHelpers"


export async function PUT(req) {

    try {
        const { id } = await req.json()

        if (!id) {
            return Response.json({ message: 'this user id is not defind' }, { status: 422 })
        }

        const admin = await AuthAdmin()
        if(!admin){
            return Response.json({ message: 'you are not admin my frind' }, { status: 403 })
        }

        await connectToDB()
        const isUserExsist = await UserModel.findOne({ _id: id })
        if (!isUserExsist) {
            return Response.json({ message: 'this user doesnt exsist' }, { status: 422 })
        }

        const userUpdated = await UserModel.findOneAndUpdate({ _id: id }, {
            $set: {
                role: isUserExsist.role === 'USER' ? 'ADMIN' : 'USER'
            }
        })

        if (userUpdated) {
            return Response.json({ message: 'user updated successfully' }, { status: 200 })
        }

        return Response.json({ message: 'somthing went wrong' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }

}