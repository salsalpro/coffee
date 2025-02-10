import React from 'react'
import Comment from '../../../Comment/Comment'
import CommentForm from './CommentForm'

import { showSwal } from '@/src/utils/helpers'
import { verifyEmail } from '@/src/utils/auth'

export default function Comments({ product }) {


  const sendComment = async ({ body, setBody, username,  setUsername, email ,  setEmail, score }) => {




    if (!body.trim('')) {
      return showSwal('نظر شما خالی است', 'error', 'درست کردن')
    }

    if (!username.trim('')) {
      return showSwal('نام کاربری شما اجباری است', 'error', 'نوشتن نام کاربری')
    }


    if (!email.trim('')) {
      return showSwal('ایمیل شما اجباری است', 'error', 'نوشتن ایمیل')
    }

    const isValidEmail = verifyEmail(email)

    if (!isValidEmail) {
      return showSwal('ایمیل شما به درستی وارد نشده است', 'error', 'درست کردن ایمیل')
    }


    const comment = {
      body,
      username,
      email,
      score,
      product: product._id
    }

    const res = await fetch(`http://localhost:3000/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...comment })
    })

    if (res.status === 201) {
      showSwal('نظر شما ثبت شد', 'success', 'ادامه')
      setBody('')
      setUsername('')
      setEmail('')
    }

  }

  const commentsAccepted = product.comments?.filter(comment =>  comment.isAccept )

  return (
    <div className="parent grid grid-cols-2 gap-3">
      <div className="comments col-span-1">
        {
          commentsAccepted.length ? product.comments?.map(comment =>  comment.isAccept && <Comment key={comment._id} {...comment} />) : <p className='rounded p-5 w-full text-lg text-center text-D3AD7F bg-white '>هنوز نظری وجود ندارد</p>
        }

      </div>
      <div className="user_comment block text-white col-span-1">
        <h5 className='font-bold text-white mb-3'>دیدگاه خود را بنویسید</h5>
        <p className='mb-3'>نشانی ایمیل شما منتشر نخواهد شد . </p>
        <CommentForm sendComment={sendComment}  />
      </div>
    </div>
  )
}
