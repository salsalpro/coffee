import ProductModel from "@/models/Product"
import ShowDetails from "./ShowDetails"
import RemoveProduct from "./RemoveProduct"


export default async function AllProducts() {

    const productsGot = await ProductModel.find({}, '-__v')
    .sort({ createdAt: -1 })

    const products = JSON.parse(JSON.stringify(productsGot))

    return (
        <div className='products p-3'>

            {

                products.length ?
                    <table className="w-full text-center rounded-lg overflow-hidden mb-12">
                        <thead className="bg-[#191919] text-[#D3AD7F]">
                            <tr className="">
                                {/* <th className="py-3 px-4 border border-[#938E8E]">شناسه</th> */}
                                <th className="py-3 px-4 border border-[#938E8E]">شناسه</th>
                                <th className="py-3 px-4 border border-[#938E8E]">عنوان</th>
                                <th className="py-3 px-4 border border-[#938E8E]">قیمت</th>
                                <th className="py-3 px-4 border border-[#938E8E]">امتیاز</th>
                                <th className="py-3 px-4 border border-[#938E8E]">جزئیات</th>
                                <th className="py-3 px-4 border border-[#938E8E]">حذف</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#101011]'>
                            {

                                products.map(product => (
                                    <tr className="hover:bg-[#191919] transition-all-ease-03" key={product._id}>
                                        <td className="py-3 text-center px-4 border border-[#938E8E] max-w-40 w-40 overflow-x-auto whitespace-no-wrap">{product._id}</td>
                                        <td className="py-3 text-center px-4 border border-[#938E8E] max-w-40 w-40 overflow-x-auto whitespace-no-wrap">{product.name}</td>
                                        <td className="py-3 text-center px-4 border border-[#938E8E] max-w-20 w-20 overflow-x-auto whitespace-no-wrap">{(product.price).toLocaleString('fa-IR')}</td>
                                        <td className="py-3 text-center px-4 border border-[#938E8E] w-6">{(product.score).toLocaleString('fa-IR')}</td>
                                        <ShowDetails _id={product._id} />
                                        <RemoveProduct _id={product._id} />
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> : <p className='rounded p-5 w-full text-lg text-center text-white bg-D3AD7F '>هنوز محصولی وجود ندارد</p>
            }

        </div>
    )
}
