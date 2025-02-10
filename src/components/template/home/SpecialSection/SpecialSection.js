import React from 'react'
import styles from '@/src/styles/SpecialSection.module.css'
import Specialcards from '@/src/components/module/home/Specialcards/Specialcards'

export default function SpecialSection() {
  return (
    <div className={styles.SpecialSection}>
      <h2 className='titleLine'>خاص ترین ها</h2>
      <Specialcards />
    </div>
  )
}
