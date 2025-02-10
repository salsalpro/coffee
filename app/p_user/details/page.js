import React from 'react'
import UserPanelLayout from '@/src/components/layouts/UserPanelLayout'
import DetailsBox from '@/src/components/module/UserPanel/DetailsBox/page'


export default async function Details() {

    return (
        <UserPanelLayout >
            <div className="parent min-h-[90vh]">
                <h2 className="titleLine big mt-6">جزئیات اکانت</h2>
                <DetailsBox />
            </div>
        </UserPanelLayout>
    )
}
