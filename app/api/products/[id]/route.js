import connectToDB from "@/config/db"
import ProductsModel from '@/models/Product'
import { AuthAdmin } from "@/src/utils/serverHelpers"

export async function DELETE(req , {params}) {
    try {
        const admin = await AuthAdmin()
        if (!admin) {
            throw new Error('this api protect and you cant access it')
        }

        const params2 = await params
        const _id = params2.id

        if (!_id) {
            return Response.json({ message: 'product id is empity' }, { status: 422 })
        }

        await connectToDB()
        const productFind = await ProductsModel.find({ _id })
        if(!productFind){
            return Response.json({ message: 'product does not exsist' }, { status: 404 })
        }

        const product = await ProductsModel.findOneAndDelete({_id})
        if (product) {
            return Response.json({ message: 'product created successfully', product }, { status: 200 })
        }

        return Response.json({ message: 'product did not created successfully' }, { status: 500 })

    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }
}