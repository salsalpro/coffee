import connectToDB from "@/config/db"
import UserModel from "@/models/User"


export async function GET(req) {
    await connectToDB()

    const user = await UserModel.create({username:'mohamadali javadi' , phone:'0923232' , })

    if(user){
        return Response.json({ message: 'this is not ok api' })
    }

    return Response.json({ message: 'this is not ok api' })
}