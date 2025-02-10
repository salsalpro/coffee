import React from 'react'
import { AuthUser } from '@/src/utils/serverHelpers'
import { redirect } from 'next/dist/server/api-utils'
import AdminPanelLayout from '@/src/components/layouts/AdminPanelLayout'
import DiscountTabel from '@/src/components/module/AdminPanel/Discount/DiscountTabel'
import AddDiscount from '@/src/components/module/AdminPanel/Discount/AddDiscount'



export default async function users() {

    const user = await AuthUser()

    if (!user) {
        return redirect('/')
    }


    return (
        <AdminPanelLayout >
            <h2 className="titleLine mt-6">کد تخفیف</h2>
            <AddDiscount />
            <DiscountTabel />
        </AdminPanelLayout>
    )
}
