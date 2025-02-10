import React from 'react'
import Navbar from '@/src/components/module/Navbar/Navbar'
import Footer from '@/src/components/module/Footer/Footer'
import MenuItem from '@/src/components/module/MenuItem/MenuItem'
import { AuthAdmin, AuthUser } from '@/src/utils/serverHelpers'
import WishlistModel from '@/models/Wishlist'
import connectToDB from '@/config/db'

export default async function page() {


  const admin = await AuthAdmin()

  const user = await AuthUser()

 if (!user) {
    return (
      <div>
        <Navbar with_bg={true}  />
        <div className="min-h-64 bg-19 p-14 flex justify-center flex-col mt-74 relative">
          <h1 className={`titleLine big`}>وارد حساب خود شوید</h1>
        </div>
        <Footer />
      </div>
    )
  }

  connectToDB()
  const wishsGot = await WishlistModel.find({ user: user._id }).populate('product', 'name img shortDescription price _id score')
  const wishs = JSON.parse(JSON.stringify(wishsGot))


  return (
    <div>
      <Navbar with_bg={true}  />
      {
        wishs.length ? (
          <div className="min-h-64 bg-19 p-14 flex justify-center flex-col mt-74 relative">
            <h1 className={`titleLine big`}>محصولات مورد علاقه</h1>
            <div className="boxHolder grid grid-cols-2 gap-8 w-full">
              {
                wishs.length > 0 &&
                wishs.map(wish => <MenuItem key={wish.product._id} {...wish.product} OffLink={true} />)
              }
            </div>
          </div>
        ) : (
          <div className="min-h-64 bg-19 p-14 flex justify-center flex-col mt-74 relative">
            <h1 className={`titleLine big`}>علاقه مندی ای وجود ندارد</h1>
          </div>
        )
      }
      <Footer />
    </div>
  )
}
