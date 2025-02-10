export const metadata = {
    title: 'پنل مدیریت',
    description: 'admin panel'
}

import { AuthAdmin} from '@/src/utils/serverHelpers';
import Sidebar from '../module/p-admin/Sidebar'
import Topbar from '../module/p-admin/Topbar'
import { redirect } from 'next/navigation';

export default async function AdminPanelLayout({ children }) {

    const admin = await AuthAdmin()
    
    if(!admin){
        return redirect('/auth')
    }

    const username = admin.username


    
    return (
        <div className={` w-full min-h-screen text-white`}>
            <div className="section flex z-50 relative">
                <Sidebar username={username} />
                <div className="w-full flex flex-col bg-black pr-64 min-h-screen">
                    <Topbar username={admin.username} />
                    <div className="bg-19 p-3 w-full h-full rounded-tr-xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
