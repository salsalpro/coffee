import React from 'react'
import MenuItem from '../../MenuItem/MenuItem'
import ProductModel from '@/models/Product'
import connectToDB from '@/config/db'

export default async function PopulerMenu() {


    await connectToDB()
    const productsGot = await ProductModel.find({})
        .sort({ createdAt: -1 })
    const products = JSON.parse(JSON.stringify(productsGot))


    return (
        <div className={`relative`} >
            <h1 className={`titleLine`}>منو پر بازدید</h1>
            <div className={'grid grid-cols-2 gap-8 px-28 py-0'} data-aos="fade-up">
                {
                    products.slice(0, 8)?.map(item => (
                        <MenuItem key={item._id} {...item} />
                    ))
                }
            </div>
        </div>

    )
}
