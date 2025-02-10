
import { AuthAdmin, CreateDiscount } from "@/src/utils/serverHelpers"



export async function POST(req) {
    try {


        const admin = await AuthAdmin()
        if (!admin) {
            throw new Error('this api protect and you cant access it')
        }

        const body = await req.json()
        const {
            code,
            percent,
            expireAt: expireInHours,
            maxUse
        } = body

        const discount = await CreateDiscount({ code, percent, expireInHours , maxUse })

        if (discount.status === 201) {
            return Response.json({ message: 'discount made successfully', discount: discount.discount }, { status: 201 })
        }


        if (discount.status === 422) {
            return Response.json({ message: 'validation faild discount did not made successfully ' }, { status: 422 })
        }

        if (discount.status === 409) {
            return Response.json({ message: 'validation faild discount already exsist ' }, { status: 409 })
        }

        return Response.json({ message: 'discount did not made successfully ' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: 'discount did not made successfully ' }, { status: 500 })
    }
}