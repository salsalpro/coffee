import connectToDB from "@/config/db"
import { cookies } from "next/headers"
import UserModel from '@/models/User'
import { GeneratAccessToken, VerifyRefreshToken } from "@/src/utils/auth"

export async function GET(req) {

    const cookie = await cookies()
    const refreshtoken = cookie.get('refreshtoken')?.value
    console.log('refreshtoken => ' , refreshtoken)
    console.log('await cookies() => ' , await cookies())
    if (!refreshtoken) {
        return Response.json({ message: 'you must login 1' }, { status: 401 })
    }
    try {
        await connectToDB()
        const IsUserExsist = await UserModel.findOne({ refreshtoken })
        if (!IsUserExsist) {
            return Response.json({ message: 'you must login 2' }, { status: 401 })
        }
        const IsValidRefreshToken = await VerifyRefreshToken(refreshtoken)
        if (!IsValidRefreshToken) {
            return Response.json({ message: 'you must login 3' }, { status: 401 })
        }
        const AccessToken = await GeneratAccessToken({ username: IsValidRefreshToken.username })
        if (!AccessToken) {
            return Response.json({ message: 'you must login 4' }, { status: 401 })
        }

        console.log('AccessToken => ' , AccessToken)

        return Response.json({ message: 'refreshing your token was successfully' }, {
            status: 200, headers: {
                'Set-Cookie': `token=${AccessToken}; path=/; HttpOnly; Secure; SameSite=None`
            }
        })
    } catch (err) {
        return Response.json({ message: 'refreshing your token was successfully' }, {
            status: 200, headers: {
                'Set-Cookie': `token=${AccessToken}`
            }
        })
    }

    return Response.json({ message: 'this is your work (GET handeler)' }, {
        status: 200, headers: {
            'Set-Cookie': 'alitoken=alitoken1 '
        }
    })
}