'use client'
import { showSwal } from "@/src/utils/helpers"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { IoTrashSharp } from "react-icons/io5"

export default function RemoveProduct({ _id }) {


  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  
  const router = useRouter()

  const DeleteProductHandeler = async () => {
    if (!_id) {
      return showSwal('خطایی رخ داد محصول در دست رس نیست', 'warning', 'ادامه')
    }

    try {
      const res = await fetch(`/api/products/${_id}`, {
        method: 'DELETE'
      })

      if (res.status === 200) {
        return showSwal('با موفقیت حذف شد', 'success', 'ادامه')
      }

      if (res.status !== 200) {
        return showSwal('حذف نشد', 'error', 'ادامه')
      }
    } catch (err) {
      return showSwal('ارور در سرور', 'error', 'ادامه')
    } finally {
      setIsFetching(false)
      startTransition(() => {
        router.refresh()
      })
    }

  }

  return (
    <>

      <td className="py-3 text-center px-4 border border-[#938E8E] w-8" ><button onClick={isPending || isFetching ? null : DeleteProductHandeler} className="bg-white px-3 py-1 rounded whitespace-no-wrap block w-fit mx-auto"><IoTrashSharp color='#D3AD7F' /></button></td>

    </>
  )
}
