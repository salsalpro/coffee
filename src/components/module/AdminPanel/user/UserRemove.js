'use client'
import swal from 'sweetalert'
import React, { useState, useTransition } from 'react'
import { IoTrashSharp } from 'react-icons/io5'
import { showSwal } from '@/src/utils/helpers'
import { useRouter } from 'next/navigation'

export default function UserRemove({id}) {

    const [isPending , startTransition] = useTransition()
    const [isFetching , SetIsFetching] = useState(false)

    const router = useRouter()

    const removeUser = () => {
        swal({title:'آیا متمعن هستید که این کاربر حذف شود ؟ ' , icon:'warning' , buttons:['خیر','بله']})
        .then(async result => {
            try{
                if(result){
                    if(!id){
                        return showSwal('کاربر یافت نشد' , 'error' , 'ادامه')
                    }
                    SetIsFetching(true)
                    const res = await fetch('/api/user' , {
                        method:'DELETE',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({id})
                    })

                    if(res.status === 200){
                        return showSwal('کاربر حذف شد' ,'success','ادامه')
                    }

                }
            }catch(err){
                return console.log('err => ' , err)
            }finally{
                SetIsFetching(false)
                
                startTransition(() => {
                    router.refresh()
                })
            }
        })
    }

    return <td className="py-3 text-center px-4 border border-[#938E8E] col-span-1 w-10" onClick={isPending || isFetching ? null : removeUser} ><button className="bg-white px-3 py-1 rounded"><IoTrashSharp color='#D3AD7F' /></button></td>
}
