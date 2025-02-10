'use client'
import { showSwal } from '@/src/utils/helpers'
import React, { useEffect, useState } from 'react'
import { FaFileUpload } from 'react-icons/fa'


export default function SendTicket() {



  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState(1)

  const [departments, setDepartments] = useState([])
  const [subDepartments, setSubDepartments] = useState([])

  const [department, setDepartment] = useState('')
  const [subDepartment, setSubDepartment] = useState('')


  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch('/api/departments')
      const departments = await res.json()
      setDepartments(departments)
    }

    getDepartments()

  }, [])

  useEffect(() => {
    const getSubDepartments = async () => {

      if (department === '') {

      } else {
        const shouldFetch = Boolean(department.length)

        if (shouldFetch) {
          const res = await fetch(`/api/departments/sub/${department}`)
          const subDepartments = await res.json()
          setSubDepartments(subDepartments)
        }
      }

    }
    getSubDepartments()
  }, [department])

  const sendTicketHandeler = async () => {
    if (!department) {
      return showSwal('دپارتمان خود را انتخاب نمایید', 'warning', 'دامه')
    }
    if (!subDepartment) {
      return showSwal('نوع تیکت خود را انتخاب نمایید', 'warning', 'دامه')
    }
    if (!title) {
      return showSwal('موضوع تیکت خود را ننوشته اید', 'warning', 'دامه')
    }
    if (!body) {
      return showSwal('تیکت خود رو ننوشته اید', 'warning', 'دامه')
    }
    const priorityNumber = Number(priority)
    if (priorityNumber < 1 || priority > 3) {
      return showSwal('اولیوت فقط 1و2و3 داریم', 'warning', 'دامه')
    }
    const newTicket = { title, body, priority: priorityNumber, department, subDepartment }

    const res = await fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newTicket })
    })

    if (res.status === 201) {
      showSwal('تیکت شما ثبت شد', 'success', 'دامه')
      setPriority(1)
      setTitle('')
      setBody('')
      setDepartment('')
      setSubDepartment('')
    }
    if (res.status === 422) {
      showSwal('اعتبار سنجی به مشکل خورد', 'error', 'دامه')
    }

  }

  return (
    <div className='mb-3 grid grid-cols-2 gap-10'>
      <div className="parent flex flex-col col-span-1 ">
        <p className='text-md mb-3'>انتخاب دپارتمان</p>
        <select value={department} className='text-D3AD7F bg-transparent border-D3AD7F rounded p-2.5' onChange={e => {

          const selectDepartment = e.target.value

          if (!selectDepartment) {
            setSubDepartments([]);
            setDepartment('')
            return
          }

          setDepartment(selectDepartment)
        }}>
          <option value={''}>دپارتمان را انتخاب کنید</option>
          {
            departments.map((department) => (
              <option key={department._id} value={department._id}>{department.title}</option>
            ))
          }
        </select>
      </div>
      <div className="parent flex flex-col col-span-1 ">
        <p className='text-md mb-3'>نوع تیکت</p>
        <select value={subDepartment} className='text-D3AD7F bg-transparent border-D3AD7F rounded p-2.5' onChange={e => {
          setSubDepartment(e.target.value)
          if (!(e.target.value)) {
            setSubDepartment('')
          }
        }}>
          <option value={''}>نوع تیکت خود را انتخاب کنید</option>
          {
            subDepartments.map(subDepartment => (
              <option key={subDepartment._id} value={subDepartment._id}>{subDepartment.title}</option>
            ))
          }
        </select>
      </div>
      <div className="parent flex flex-col col-span-1 ">
        <p className='text-md mb-3'>موضوع تیکت</p>
        <input value={title} className='text-D3AD7F bg-transparent border-D3AD7F col-span-1 rounded p-2.5 type_white' onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="parent flex flex-col col-span-1 ">
        <p className='text-md mb-3'>اولویت</p>
        <select value={priority} className='text-D3AD7F bg-transparent border-D3AD7F rounded p-2.5' onChange={e => setPriority(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className="parent flex flex-col col-span-2">
        <p className="text-md mb-3">تیکت شما</p>
        <textarea rows={'6'} cols={'12'} value={body} onChange={e => setBody(e.target.value)} className="text-D3AD7F bg-transparent border-D3AD7F rounded p-2 5 type_white">

        </textarea>
      </div>
      <div className='parent flex flex-col col-span-2 text-D3AD7F bg-transparent border-D3AD7F rounded p-2 5'>
        <p className='my-3 text-center'>حد اکثر اندازه : 6 مگابایت </p>
        <p className='mb-3 text-center'>فرمت مجاز : 6 مگابایت </p>
        <label htmlFor="fileUpload" className="text-D3AD7F px-4 py-2 rounded cursor-pointer max-auto w-30 text-center text-center flex justify-center">
          آپلود فایل
          <FaFileUpload className='mx-3 relative top-1' />
        </label>
        <input type="file" id="fileUpload" className="hidden" />
      </div>
      <button className='w-40 p-2.5 rounded mb-20 border-D3AD7F mx-auto col-span-2' onClick={sendTicketHandeler}>ارسال</button>

    </div>
  )
}
