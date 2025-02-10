import connectToDB from "@/config/db"
import UserModel from "@/models/User"
import { roles } from '@/src/utils/constans'
import { GeneratAccessToken, GeneratRefreshToken, HashPassword, verifyEmail, verifyPhone } from "@/src/utils/auth"
import BanModel from "@/models/Ban"



export async function POST(req) {
    try {
        await connectToDB()
        const body = await req.json()

        const { username: username1, phone: phone1, email: email1, password: password1 } = body

        const username = username1?.trim();
        const phone = phone1?.trim();
        const email = email1?.trim();
        const password = password1?.trim();

        if (!username) {
            return Response.json({ message: 'احراض هویت به مشکل خورد' }, { status: 422 })
        } else if (!phone) {
            return Response.json({ message: 'احراض هویت به مشکل خورد' }, { status: 422 })
        }

        const isValidPhone = await verifyPhone(phone)

        if (!isValidPhone) {
            return Response.json({ message: 'شماره شما قابل حدس است' }, { status: 422 })
        }

        if (email) {
            const validatEmail = await verifyEmail(email)
            if (!validatEmail) {
                return Response.json({ message: 'ایمیل شما به درستی وارد نشده است' }, { status: 422 })
            }
        }

        const isUserExist = await UserModel.findOne({ $or: [{ username }, { email }, { phone }] })

        if (isUserExist) {
            return Response.json({ message: 'این کاربر در حال حاضر ثبت نام کرده است' }, { status: 409 })
        }

        const hashedPassword = await HashPassword(password)
        const users = await UserModel.find({})

        const isThisUserBan = await BanModel.findOne({ $or: [{ username }, { email }, { phone }] })

        if (isThisUserBan) {
            return Response.json({ message: 'this user is ban' }, { status: 403 })
        }

        const refreshtoken = await GeneratRefreshToken({ username })
        const AccessToken = await GeneratAccessToken({ username })

        if (!AccessToken) {
            return Response.json({ message: 'AccessToken did not created' })
        }
        if (!refreshtoken) {
            return Response.json({ message: 'refreshtoken did not created' })
        }

        const headers = new Headers()
        headers.append('Set-Cookie', `refreshtoken=${refreshtoken};path=/;HttpOnly;Secure; SameSite=None`)
        headers.append('Set-Cookie', `token=${AccessToken};path=/;HttpOnly;Secure; SameSite=None`)

        const user = { username, phone, email, password: hashedPassword, role: users.length > 0 ? roles.user : roles.admin }
        const userCreated = await UserModel.create(user)

        if (userCreated) {
            return Response.json({ message: 'ثبت نام شدید' }, { status: 201, headers })
        }

        return Response.json({ message: 'signup has problem' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }
}


