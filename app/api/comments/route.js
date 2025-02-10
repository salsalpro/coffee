import connectToDB from "@/config/db"
import CommentModel from "@/models/Comment"
import UserModel from "@/models/User"
import ProductModel from '@/models/Product'
import { verifyEmail } from "@/src/utils/auth"
import { isValidObjectId } from "mongoose"

export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { username: username1, body: body1, email: email1, score: score1, product: product1 } = reqBody

        // validation 
        const username = username1.trim('')
        if (!username) {
            return Response.json({ message: 'username is empty' }, { status: 422 })
        }

        const body = body1.trim('')
        if (!body) {
            return Response.json({ message: 'body is empty' }, { status: 422 })
        }

        const email = email1.trim('')
        if (!email) {
            return Response.json({ message: 'email is empty' }, { status: 422 })
        }

        const isValidEmail = await verifyEmail(email)

        if (!isValidEmail) {
            return Response.json({ message: 'email is not true' }, { status: 422 })
        }


        await connectToDB()
        const isUserExsist = await UserModel.findOne({ username, email })

        if (!isUserExsist) {
            return Response.json({ message: 'this username or email is not you correct' }, { status: 422 })
        }

        const score = score1 || 5

        const product = product1.trim('')
        if (!product) {
            return Response.json({ message: 'productId is empty' }, { status: 422 })
        }

        const isProductObjectID = isValidObjectId(product)

        if (!isProductObjectID) {
            return Response.json({ message: 'this product is not valid' }, { status: 422 })
        }

        const wroter = isUserExsist._id

        const newComment = {
            username,
            body,
            wroter,
            email,
            score,
            product
        }

        const comment = await CommentModel.create({ ...newComment })

        if (comment) {

            const updateProduct = await ProductModel.findOneAndUpdate({ _id: product }, {
                $push: {
                    comments: comment._id
                }
            })

            return Response.json({ message: 'product created successfully', comment }, { status: 201 })
        }

        return Response.json({ message: 'product did not created successfully' }, { status: 500 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }
}