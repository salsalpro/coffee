import React from 'react'
import connectToDB from '@/config/db'
import UserModel from '@/models/User'
import UserEdite from '@/src/components/module/AdminPanel/user/UserEdite'
import UserChangeRole from '@/src/components/module/AdminPanel/user/UserChangeRole'
import UserRemove from '@/src/components/module/AdminPanel/user/UserRemove'
import UserBan from '@/src/components/module/AdminPanel/UserBan'
import AdminPanelLayout from '@/src/components/layouts/AdminPanelLayout'



export default async function users() {

  await connectToDB()
  const usersGot = await UserModel.find({}, '-__v')
  const users = JSON.parse(JSON.stringify(usersGot))



  return (
    <AdminPanelLayout >
      <div className="parent min-h-[90vh]">
        {
          users.length ? (
            <>
              <h2 className="titleLine mt-6">کاربران ها</h2>
              <table className="w-full text-center rounded-lg overflow-hidden mb-12">
                <thead className="bg-[#191919] text-[#D3AD7F]">
                  <tr className="">
                    <th className="py-3 px-4 border border-[#938E8E]">شناسه</th>
                    <th className="py-3 px-4 border border-[#938E8E]">نام کاربری</th>
                    <th className="py-3 px-4 border border-[#938E8E]">شماره</th>
                    <th className="py-3 px-4 border border-[#938E8E]">نقش</th>
                    <th className="py-3 px-4 border border-[#938E8E]">تغیر سطح</th>
                    <th className="py-3 px-4 border border-[#938E8E]">حذف</th>
                    <th className="py-3 px-4 border border-[#938E8E]">بن</th>
                  </tr>
                </thead>
                <tbody className='bg-[#101011]'>
                  {

users.map(user => (
                      <tr className="hover:bg-[#191919] transition-all-ease-03" key={user._id}>
                        <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 overflow-x-auto w-fit">{user._id}</td>
                        <td className="py-3 text-center px-4 border border-[#938E8E] min-w-10 max-w-40 overflow-x-auto w-fit">{user.username}</td>
                        <td className="py-3 text-center px-4 border border-[#938E8E] min-w-10 max-w-40 overflow-x-auto w-fit">{user.phone}</td>
                        <td className="py-3 text-center px-4 border border-[#938E8E] min-w-10 w-10">{user.role === 'USER' ? 'کاربر' : 'ادمین' }</td>
                        <UserChangeRole id={user._id} />
                        <UserRemove id={user._id} />
                        <UserBan username={user.username} phone={user.phone} />
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </>
          ) : (
            <h2 className="titleLine big mt-6">کاربری وجود ندارد</h2>
          )
        }
      </div>
    </AdminPanelLayout>
  )
}
