import React from 'react'
import Navbar from '@/src/components/module/Navbar/Navbar'
import Footer from '@/src/components/module/Footer/Footer'
import Deatails from '@/src/components/module/product/Deatails/Deatails'
import Gallery from '@/src/components/module/product/Gallery/Gallery'
import Tabs from '../../module/product/Tabs/Tabs'

import RelatedProduct from '../../module/product/RelatedProduct/page'
export default async function ProductIDTemplate({ product }) {

  return (
    <div className="parent">
      <Navbar  with_bg={true}  />
      <div className="product-info grid grid-cols-12 mt-74 p-6 bg-19">
        <div className="col-span-3 mt-12 mx-12">
          <Gallery />
        </div>
        <div className="col-span-9 mt-12 mx-12">
          <Deatails product={product} />
        </div>
      </div>
      <div className="tabs_parent p-6 pt-0 bg-D3AD7F">
        <Tabs product={product} />
      </div>
      <div className='related bg-19 p-6 pt-12'>
        <RelatedProduct product={product} />
      </div>
      <Footer />
    </div>
  )
}
