import connectToDB from "@/config/db"
import ProductsModel from '@/models/Product'
import { AuthAdmin } from "@/src/utils/serverHelpers"
import path from 'path'
import { writeFile } from "fs/promises"


export async function GET(req) {
    await connectToDB()
    const products = await ProductsModel.find({}, '-__v').populate('comments')

    return Response.json({ messgae: 'this is message of product to you', products })
}

export async function POST(req) {
    // try {
        const admin = await AuthAdmin()
        if (!admin) {
            throw new Error('this api protect and you cant access it')
        }
        await connectToDB()
        const formData = await req.formData()
        const name = formData.get('name')
        const price = formData.get('price')
        const shortDescription = formData.get('shortDescription')
        const longDescription = formData.get('longDescription')
        const weight = formData.get('weight')
        const suitableFor = formData.get('suitableFor')
        const smell = formData.get('smell')
        const tags = formData.get('tags')
        const img = formData.get('img')

        if (!name) {
            return Response.json({ message: 'product has not name ' }, { status: 422 })
        }
        if (!price) {
            return Response.json({ message: 'product has not price ' }, { status: 422 })
        }
        if (isNaN(price)) {
            return Response.json({ message: 'product price is not number' }, { status: 422 })
        }
        if (!shortDescription) {
            return Response.json({ message: 'product has not shortDescription ' }, { status: 422 })
        }
        if (!longDescription) {
            return Response.json({ message: 'product has not longDescription ' }, { status: 422 })
        }
        if (!img) {
            return Response.json({ message: 'product has not img ' }, { status: 422 })
        }

        const buffer = await Buffer.from(await img.arrayBuffer())
        const filename = Date.now() + img.name
        const imgPath = path.join(process.cwd() , `public/uploads/products/${filename}`)

        await writeFile(imgPath , buffer)

        const product = await ProductsModel.create({
            name,
            price,
            shortDescription,
            longDescription,
            weight,
            suitableFor,
            smell,
            tags,
            img:`${process.env.baseRoute}/uploads/products/${filename}`,
        })

        if (product) {
            return Response.json({ message: 'product created successfully', product }, { status: 201 })
        }

        return Response.json({ message: 'product did not created successfully' }, { status: 500 })

    // } catch (err) {
    //     return Response.json({ message: err.message }, { status: 500 })
    // }
}


export async function PUT(req) {
    try {
        const formData = await req.formData()

        const img = formData.get('img')


        if (!img) {
            return Response.json({ message: 'product has not image ' }, { status: 422 })
        }

        const buffer = await Buffer.from(await img.arrayBuffer())
        const filename = Date.now() + img.name
        const imgPath = path.join(process.cwd() , `public/uploads/${filename}`)

        await writeFile(imgPath , buffer)


        return Response.json({ message: 'product uploaded successfully' }, { status: 422 })
    } catch (err) {
        return Response.json({ message: 'product uploaded successfully' }, { status: 500 })
    }
}

