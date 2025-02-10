export async function GET(req , {params}) {
    try {

        const id = await req.params.id

        console.log('id => ' , id)

        const isIdObjectId = isValidObjectId(id)
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