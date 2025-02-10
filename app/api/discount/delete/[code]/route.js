import connectToDB from "@/config/db"
import DiscountModel from "@/models/Discount"
import { AuthAdmin } from "@/src/utils/serverHelpers"

export async function DELETE(req, { params }) {
    try {

        const admin = await AuthAdmin()
        if (!admin) {
            throw new Error('this api protect and you cant access it')
        }

        const params2 = await params
        const code = params2?.code

        if (!code) {
            return Response.json({ message: 'code is not defind !!!! ' }, { status: 422 })
        }

        await connectToDB()
        const RemoveDiscount = await DiscountModel.findOneAndDelete({ code })
        if (RemoveDiscount) {
            return Response.json({ message: 'Discount removing was succesfulyy' }, { status: 200 })
        }

        return Response.json({ message: 'something went wrong in discount' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: 'something went wrong in discount' }, { status: 500 })
    }
}