import connectToDB from "@/config/db"
import Ban from "@/models/Ban"
import CommentModel from "@/models/Comment"
import TicketModel from "@/models/Ticket"
import UserModel from "@/models/User"
import WishlistModel from "@/models/Wishlist"
import { AuthAdmin } from "@/src/utils/serverHelpers"

export async function POST(req) {
    try {

        const admin = await AuthAdmin()
        if (!admin) {
            throw new Error('this api protect and you cant access it')
        }

        const body = await req.json()
        const { email, username: username1, phone: phone1 } = body
        const username = username1.trim()
        const phone = phone1.trim()



        if (!email && !username && !phone) {
            return Response.json({ message: 'all field are empity' }, { status: 422 })
        }


        await connectToDB()
        const isUserExsist = await UserModel.findOne({ username, phone })

        if (!isUserExsist) {
            return Response.json({ message: 'user is not exsist' }, { status: 404 })
        }


        const userBan = await Ban.create({
            username,
            email,
            phone
        })


        if (userBan) {

            const deleteUser = await UserModel.findOneAndDelete({ _id: isUserExsist._id })
            if (!deleteUser) {
                return Response.json({ message: 'user didnt baned successfully ' }, { status: 500 })
            }

            const deleteUserWishList = await WishlistModel.deleteMany({ _id: isUserExsist._id })
            if (!deleteUserWishList) {
                return Response.json({ message: 'user baned but user deleted successfully but wishlist doesnt' }, { status: 201 })
            }

            const deleteUserTikets = await TicketModel.deleteMany({ _id: isUserExsist._id })
            if (!deleteUserTikets) {
                return Response.json({ message: 'user baned but user deleted successfully with wishlist but tikets doesnt' }, { status: 201 })
            }

            const deleteUserComments = await CommentModel.deleteMany({ _id: isUserExsist._id })
            if (!deleteUserComments) {
                return Response.json({ message: 'user baned but user deleted successfully with wishlist and tikets but comments doesnt' }, { status: 201 })
            }

            return Response.json({ message: 'user ban and evrithing of it has been deleted' }, { status: 201 })
        }


        return Response.json({ message: 'something went wrong' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message })
    }
}