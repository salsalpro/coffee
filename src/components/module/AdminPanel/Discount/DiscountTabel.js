import connectToDB from "@/config/db"
import Discount from "@/models/Discount"
import RemoveDiscount from "./RemoveDiscount"


export default async function DiscountTabel() {

    await connectToDB()
    const discountsGot = await Discount.find({})
    const discounts = JSON.parse(JSON.stringify(discountsGot))


    return (
        <div className='discounts p-3'>

            {

                discounts.length ?
                    <table className="w-full text-center rounded-lg overflow-hidden mb-12">
                        <thead className="bg-[#191919] text-[#D3AD7F]">
                            <tr className="">
                                <th className="py-3 px-4 border border-[#938E8E]">شناسه</th>
                                <th className="py-3 px-4 border border-[#938E8E]">کد</th>
                                <th className="py-3 px-4 border border-[#938E8E]">تعداد</th>
                                <th className="py-3 px-4 border border-[#938E8E]">استفاده شده</th>
                                <th className="py-3 px-4 border border-[#938E8E]">درصد</th>
                                <th className="py-3 px-4 border border-[#938E8E]">انتضا</th>
                                <th className="py-3 px-4 border border-[#938E8E]">حذف</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#101011]'>
                            {

                                discounts.map(discount => (
                                    <tr className="hover:bg-[#191919] transition-all-ease-03" key={discount._id}>
                                        <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-20 overflow-x-auto whitespace-no-wrap">{discount._id}</td>
                                        <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-32 overflow-x-auto whitespace-no-wrap">{discount.code}</td>
                                        <td className={`py-3 text-center px-4 border border-[#938E8E] w-16 whitespace-no-wrap ${discount.maxUse === discount.uses ? 'text-red-500' : 'text-green-500'}`} >{discount.maxUse}</td>
                                        <td className={`py-3 text-center px-4 border border-[#938E8E] w-16 whitespace-no-wrap ${discount.maxUse === discount.uses ? 'text-red-500' : 'text-green-500'} `} >{discount.uses}</td>
                                        <td className="py-3 text-center px-4 border border-[#938E8E] w-16 whitespace-no-wrap">{discount.percent}</td>
                                        <td className={`py-3 text-center px-4 border border-[#938E8E] max-w-24 w-20 overflow-x-auto whitespace-no-wrap ${( new Date(discount.expireAt).getTime() > Date.now() ) ? 'text-green-500' : 'text-red-500'}`}>{new Date(discount.expireAt).toLocaleString('fa-IR')}</td>
                                        <RemoveDiscount  code={discount.code} />
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> : <p className='rounded p-5 w-full text-lg text-center text-white bg-D3AD7F '>هنوز کد تخفیفی وجود ندارد</p>
            }

        </div>
    )
}
