import connectToDB from "@/config/db"
import UserModel from "@/models/User"
import { GeneratAccessToken, GeneratRefreshToken, VerifyPassword } from "@/src/utils/auth"


export async function POST(req) {
    try {
        await connectToDB()
        const body = await req.json()

        const { identifire: identifire1, password: password1 } = body

        const identifire = identifire1.trim('')
        const password = password1.trim('');

        if (!identifire) {
            return Response.json({ message: 'شماره / ایمیل شما اجباری است' }, { status: 422 })
        }

        if (!password) {
            return Response.json({ message: 'پسورد شما اجباری است' }, { status: 422 })
        }

        const isUserExist = await UserModel.findOne({ $or: [{ email: identifire }, { phone: identifire }] })

        if (!isUserExist) {
            return Response.json({ message: 'شماره / ایمیل یا پسورد شما نادرست است' }, { status: 402 })
        }

        const isSamePass = await VerifyPassword(password, isUserExist.password)

        if (!isSamePass) {
            return Response.json({ message: 'شماره / ایمیل یا پسورد شما نادرست است' }, { status: 422 })
        }

        const refreshtoken = await GeneratRefreshToken({ username: isUserExist.username })
        const AccessToken = await GeneratAccessToken({ username: isUserExist.username })

        if (!AccessToken) {
            return Response.json({ message: 'AccessToken did not created' })
        }
        if (!refreshtoken) {
            return Response.json({ message: 'refreshtoken did not created' })
        }


        const headers = new Headers()
        headers.append('Set-Cookie', `refreshtoken=${refreshtoken};path=/;HttpOnly;Secure; SameSite=None`)
        headers.append('Set-Cookie', `token=${AccessToken};path=/;HttpOnly;Secure; SameSite=None`)

        const UserUpdate = await UserModel.findOneAndUpdate({
            $or: [
                { email: identifire },
                { phone: identifire },
                {_id:isUserExist._id}
            ]
        }, {
            $set: {
                refreshtoken
            }
        })

        return Response.json({ message: 'you logged In', role: isUserExist.role }, { status: 200, headers })
    } catch (err) {
        return Response.json(
            { message: err.message },
            { status: 500 }
        )
    }
}


