import React from 'react'
import MenuItem from '../../MenuItem/MenuItem'
import ProductModel from '@/models/Product'

export default async function RelatedProduct() {



    const productsGot = await ProductModel.find({})
        .sort({ createdAt: -1 })
    const products = JSON.parse(JSON.stringify(productsGot))

    return (
        <div className="parent">
            <h2 className="titleLine">منو مرتبط</h2>
            <div className={'grid grid-cols-2 gap-8'} data-aos="fade-up">
                {
                    products.slice(0, 4).map(item => (
                        <MenuItem key={item._id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}
