import React from 'react'
import ProductIDTemplate from '@/src/components/template/ProductIDTemplate/ProductIDTemplate'
import connectToDB from '@/config/db'
import ProductModel from '@/models/Product'
import { redirect } from 'next/navigation'

export default async function productID({params}) {
  connectToDB()
  
  const params2 = await params
  const productID = await params2.id

  const productGot = await ProductModel.findOne({_id:productID}).populate('comments')
  const product = await JSON.parse(JSON.stringify(productGot))

  if(!product){
    redirect('/')
  }


  return (
    <ProductIDTemplate product={product} />
  )
}
