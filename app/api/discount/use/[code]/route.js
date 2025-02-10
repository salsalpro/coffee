import { UseDiscount } from "@/src/utils/serverHelpers"
import { Response } from "next/server"


export async function GET(req, { params }) {
    try {

        const params2 = await params
        const code = params2?.code

        if (!code) {
            return Response.json({ message: 'code is not defind !!!! ' }, { status: 422 })
        }

        const discount = await UseDiscount(code)
        if (discount.status === 410) {
            return Response.json({ message: 'this discount expired' }, { status: 410 })
        }
        if (discount.status === 404) {
            return Response.json({ message: 'discount did not found' }, { status: 404 })
        }
        if (discount.status === 500) {
            return Response.json({ message: 'something went wrong in discount' }, { status: 500 })
        }
        if (discount.status === 200) {
            return Response.json({ message: 'discount has time', discount: discount.discount }, { status: 200 })
        }

        return Response.json({ message: 'something went wrong in discount' }, { status: 501 })
    } catch (err) {
        return Response.json({ message: 'something went wrong in discount' }, { status: 500 })
    }
}

