import React from 'react'
import connectToDB from '@/config/db'
import AdminPanelLayout from '@/src/components/layouts/AdminPanelLayout'
import AllProducts from '@/src/components/module/AdminPanel/products/AllProducts'
import AddProduct from '@/src/components/module/AdminPanel/products/AddProduct'


export default async function AllTicketsParent() {
  
  await connectToDB()

  return (
    <AdminPanelLayout >
      <div className="parent min-h-[85vh]">
        <h2 className="titleLine mt-6">ثبت محصول</h2>
        <AddProduct />
      </div>
      <div className="parent min-h-[85vh]">
        <h2 className="titleLine mt-6">محصولات</h2>
        <AllProducts />
      </div>
    </AdminPanelLayout>
  )
}
