import connectToDB from "@/config/db";
import UserModel from "@/models/User";
import { VerifyAccessToken } from "@/src/utils/auth";
import { cookies } from "next/headers";


export async function GET(req) {

    try {
        const cookie = await cookies()
        const token = cookie.get('token')?.value

        if (!token) {
            return Response.json({ message: 'you did not sign up' }, { status: 401 })
        }

        const tokenPayload = await VerifyAccessToken(token)
        if (!tokenPayload) {
            return Response.json({ message: 'you did not sign up' }, { status: 401 })
        }
        const tokenUsername = tokenPayload.username

        await connectToDB()
        const isUserExsist = await UserModel.findOne({ username: tokenUsername }, '-password -refreshtoken -__v ')

        if (!isUserExsist) {
            return Response.json({ message: 'you did not sign up' }, { status: 401 })
        }

        return Response.json({ user: isUserExsist }, { status: 200 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }

}