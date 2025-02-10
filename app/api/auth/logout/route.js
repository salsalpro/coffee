import { cookies } from "next/headers"


export async function GET(req) {
    // (await cookies()).delete('token')
    const headers = new Headers()
    headers.append('Set-Cookie' , `token='';path=/;HttpOnly;Secure; SameSite=NoneMax-Age=0`)
    headers.append('Set-Cookie' , `refreshtoken='';path=/;HttpOnly;Secure; SameSite=NoneMax-Age=0`)

    return Response.json({ message: 'you logged out successfully'} , { status: 200, headers })
}


