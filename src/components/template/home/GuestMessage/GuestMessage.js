import React from 'react'
import styles from './styles.module.css'
import TestimonialSlider from '@/src/components/module/home/TestimonialSlider/TestimonialSlider'

export default function GuestMessage() {
  return (
    <div className={styles.parent}>
        <h2 className="titleLine mb-4">نامه مهمان ها</h2>
        <TestimonialSlider />
    </div>
  )
}
