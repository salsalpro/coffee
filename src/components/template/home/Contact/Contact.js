import React from 'react'
import styles from './style.module.css'
import ContactItems from '@/src/components/module/home/ContactItems/ContactItems'

export default function Contact() {
  return (
    <div className={`${styles.parent}  bg-black`}>
       <ContactItems />
    </div>
  )
}
