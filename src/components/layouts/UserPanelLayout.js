

export const metadata = {
    title: 'پنل کاربری',
    description: 'user panel'
}

import { AuthUser } from '@/src/utils/serverHelpers';
import Sidebar from '../module/p-user/Sidebar'
import Topbar from '../module/p-user/Topbar'
import { redirect } from 'next/navigation';

export default async function UserPanelLayout({ children }) {

    const user = await AuthUser()

      if(!user){
        return redirect('/auth')
      }

    return (
        <div className={` w-full min-h-screen text-white`}>
            <div className="section flex z-50 relative">
                <Sidebar username={user.username} />
                <div className="w-full flex flex-col bg-black pr-64">
                    <Topbar username={user.username} role={user.role} />
                    <div className="bg-19 p-3 w-full h-full rounded-tr-xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
