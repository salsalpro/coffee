import connectToDB from "@/config/db"
import CommentModel from "@/models/Comment"
import TicketModel from "@/models/Ticket"
import UserModel from "@/models/User"
import WishlistModel from "@/models/Wishlist"
import { verifyEmail, verifyPhone } from "@/src/utils/auth"
import { AuthAdmin, AuthUser } from "@/src/utils/serverHelpers"
import { isValidObjectId } from "mongoose"

export async function PUT(req) {
    try {

        const body = await req.json()

        const { username: username1, email: email1, phone: phone1 } = body
        const username = username1.trim('')
        const email = email1.trim('')
        const phone = phone1.trim('')

        if (!username) {
            return Response.json({ message: 'username is empity' }, { status: 422 })
        }

        if (!email) {
            return Response.json({ message: 'email is empity' }, { status: 422 })
        }

        if (!phone) {
            return Response.json({ message: 'phone is empity' }, { status: 422 })
        }

        const verifyEmailValidation = await verifyEmail(email)

        if (!verifyEmailValidation) {
            return Response.json({ message: 'email is not correct' }, { status: 422 })
        }

        const verifyPhoneValidation = await verifyPhone(phone)

        if (!verifyPhoneValidation) {
            return Response.json({ message: 'phone number is not correct' }, { status: 422 })
        }

        const user = await AuthUser()
        if (!user) {
            return Response.json({ message: 'you did not login' }, { status: 401 })
        }

        await connectToDB()
        const newUser = await UserModel.findOneAndUpdate({
            username: user.username,
            email: user.email,
            phone: user.phone
        }, {
            $set: { username, email, phone }
        })

        if (newUser) {
            return Response.json({ message: 'user updated successfulyy' }, { status: 200 })
        }

        return Response.json({ message: 'somehting went wrong' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message })
    }
}

export async function DELETE(req) {
    try {
        const { id } = await req.json()

        if (!id) {
            return Response.json({ message: 'id is empity' }, { status: 422 })
        }

        const isValidID = isValidObjectId(id)

        if (!isValidID) {
            return Response.json({ message: 'id is not true' }, { status: 422 })
        }

        const admin = await AuthAdmin()
        if (!admin) {
            return Response.json({ message: 'you are not admin my frind' }, { status: 403 })
        }

        const isUserExsist = await UserModel.findOne({ _id: id })

        if (!isUserExsist) {
            return Response.json({ message: 'this user is not exsist' }, { status: 404 })
        }

        const userDelete = await UserModel.findOneAndDelete({ _id: isUserExsist._id })
        if (userDelete) {
            const deleteUserWishList = await WishlistModel.deleteMany({ _id: isUserExsist._id })
            if (!deleteUserWishList) {
                return Response.json({ message: 'user deleted successfully but wishlist doesnt' }, { status: 200 })
            }

            const deleteUserTikets = await TicketModel.deleteMany({ _id: isUserExsist._id })
            if (!deleteUserTikets) {
                return Response.json({ message: 'user deleted successfully with wishlist but tikets doesnt' }, { status: 200 })
            }

            const deleteUserComments = await CommentModel.deleteMany({ _id: isUserExsist._id })
            if (!deleteUserComments) {
                return Response.json({ message: 'user deleted successfully with wishlist and tikets but comments doesnt' }, { status: 200 })
            }



            return Response.json({ message: 'user deleted successfully with wishlist and tikets and comments' }, { status: 200 })
        }

        return Response.json({ message: 'something went wrong' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message })
    }
}