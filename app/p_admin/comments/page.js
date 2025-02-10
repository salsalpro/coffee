import React from 'react'
import CommentModel from '@/models/Comment'
import ShowComment from '@/src/components/module/panel/comments/ShowComment'
import AdminPanelLayout from '@/src/components/layouts/AdminPanelLayout'
import AcceptComment from '@/src/components/module/panel/comments/AcceptComment'


export default async function Comments() {

    const commentsGot = await CommentModel.find({}).populate('product', 'name _id')
    const comments = JSON.parse(JSON.stringify(commentsGot))

    return (
        <AdminPanelLayout >
            <div className="parent min-h-[90vh]">
                {
                    comments.length ? (
                        <>
                            <h2 className="titleLine mt-6">نظر ها</h2>
                           
                            <table className="w-full text-center rounded-lg overflow-hidden mb-12">
                                <thead className="bg-[#191919] text-[#D3AD7F]">
                                    <tr className="">
                                        <th className="py-3 px-4 border border-[#938E8E]">تاریخ</th>
                                        <th className="py-3 px-4 border border-[#938E8E]">شناسه</th>
                                        <th className="py-3 px-4 border border-[#938E8E]">محصول</th>
                                        <th className="py-3 px-4 border border-[#938E8E]">امتیاز</th>
                                        <th className="py-3 px-4 border border-[#938E8E]">وضعیت</th>
                                        <th className="py-3 px-4 border border-[#938E8E]">مشاهده</th>
                                        <th className="py-3 px-4 border border-[#938E8E]">تایید</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-[#101011]'>
                                    {

                                        comments.map(comment => (
                                            <tr className="hover:bg-[#191919] transition-all-ease-03" key={comment._id}>
                                                <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-20 overflow-x-auto whitespace-no-wrap ">{new Date(comment.date).toLocaleString('fa-IR')}</td>
                                                <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-20 overflow-x-auto whitespace-no-wrap ">{comment._id}</td>
                                                <td className="py-3 text-center px-4 border border-[#938E8E] max-w-32 w-32 overflow-x-auto whitespace-no-wrap ">{comment.product.name}</td>
                                                <td className="py-3 text-center px-4 border border-[#938E8E] w-12">{comment.score}</td>
                                                <td className={`py-3 text-center px-4 border border-[#938E8E] w-12 ${comment.isAccept ? 'text-green-500' : 'text-red-500'}`}>{comment.isAccept ? 'تایید' : 'انتظار'}</td>
                                                <ShowComment body={comment.body} />
                                                <AcceptComment _id={comment._id} isAccept={comment.isAccept} />
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <h2 className="titleLine big mt-6">نظری وجود ندارد</h2>
                    )
                }
            </div>
        </AdminPanelLayout >
    )
}
