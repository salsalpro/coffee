import connectToDB from "@/config/db";
import ProductModel from "@/models/Product";
import UserModel from "@/models/User";
import WishlistModel from "@/models/Wishlist";
import { isValidObjectId } from "mongoose";


export async function POST(req) {
    try {

        const body = await req.json()
        const { user, product } = body

        const isUserObjectId = isValidObjectId(user)
        if (!isUserObjectId) {
            return Response.json({ message: 'user id is not true ' }, { status: 422 })
        }
        const isProductObjectId = isValidObjectId(product)
        if (!isProductObjectId) {
            return Response.json({ message: 'product id is not true' }, { status: 404 })
        }

        connectToDB()

        const isUserExsist = await UserModel.findOne({ _id: user })
        if (!isUserExsist) {
            return Response.json({ message: 'user did not log in' }, { status: 404 })
        }

        const isProductExsist = await ProductModel.findOne({ _id: product })
        if (!isProductExsist) {
            return Response.json({ message: 'product not found' }, { status: 404 })
        }

        const isWishExsist = await WishlistModel.findOne({user , product})

        if(isWishExsist){
            return Response.json({message:'this wish already exsist'} , {status:409})
        }

        const WishlistItem = await WishlistModel.create({ user, product })
        if (WishlistItem) {
            return Response.json({ message: 'product added to wish list succesfully' }, { status: 201 })
        }
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }
}



export async function DELETE(req) {
    try {

        const body = await req.json()
        const { user, product } = body
        
        await connectToDB()
        const WishlistItemDelete = await WishlistModel.findOneAndDelete({ user, product })
        if (WishlistItemDelete) {
            return Response.json({ message: 'product deleted from wish list succesfully' }, { status: 200 })
        }

        return Response.json({ message: 'product did not deleted from wish list succesfully' }, { status: 501 })
        

    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }
}