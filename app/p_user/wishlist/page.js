import React from 'react'
import UserPanelLayout from '@/src/components/layouts/UserPanelLayout'
import WishlistModel from '@/models/Wishlist'
import WishlistItem from '@/src/components/module/UserPanel/WishlistItem/WishlistItem'
import { AuthUser } from '@/src/utils/serverHelpers'
import { redirect } from 'next/dist/server/api-utils'



export default async function p_user() {

  const userAuth = await AuthUser()
  const user = JSON.parse(JSON.stringify(userAuth))

  if (!user) {
    return redirect('/')
  }

  const wishlistGot = await WishlistModel.find({ user: user._id }, 'product').populate('product', '_id name price shortDescription score img')
  const wishlist = JSON.parse(JSON.stringify(wishlistGot))
  const userID = user._id


  return (
    <UserPanelLayout >
      <div className="parent min-h-[90vh]">
        {
          wishlist.length ? (
            <>
              <h2 className="titleLine mt-6">علاقه مندی</h2>
              <div className="wishlist grid grid-cols-2 gap-3">
                {
                  wishlist.map(wish => <WishlistItem key={wish.product._id} {...wish.product} userID={userID} />)
                }
              </div>
            </>
          ) : (
            <h2 className="titleLine big mt-6">علاقه مندی ای وجود ندارد</h2>
          )
        }
      </div>
    </UserPanelLayout>
  )
}
