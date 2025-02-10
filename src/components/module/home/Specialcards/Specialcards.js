import React from 'react'
import styles from '@/src/styles/SpecialSection.module.css'
import Image from 'next/image'

export default function Specialcards() {
    ///// dont let the items be more than 3 
  return (
    <div className={styles.Specialcards} data-aos="fade-up">
        <div className={styles.SpecialcardItem}>
            <Image className={styles.image} src='/coffee/special1.png' width={289} height={216} alt='coffee' />
            <h3 className={styles.SpecialcardItemTitle}>کاپوچینو</h3>
            <p className={styles.SpecialcardItemInfo}>
            قهوه تازه و گرمتون درکنار شماست و از اینکه در هوای سرد و گرم شمارو همراهی میکنه خرسندیم
            </p>
            <span className={styles.SpecialcardItemPrice}>فقط 100 تومان</span>
        </div>
       <div className={styles.SpecialcardItem}>
            <Image className={styles.image} src='/coffee/special2.png' width={289} height={216} alt='coffee' />
            <h3 className={styles.SpecialcardItemTitle}>کاپوچینو</h3>
            <p className={styles.SpecialcardItemInfo}>
            قهوه تازه و گرمتون درکنار شماست و از اینکه در هوای سرد و گرم شمارو همراهی میکنه خرسندیم
            </p>
            <span className={styles.SpecialcardItemPrice}>فقط 100 تومان</span>
        </div>
       <div className={styles.SpecialcardItem}>
            <Image className={styles.image} src='/coffee/special3.png' width={289} height={216} alt='coffee' />
            <h3 className={styles.SpecialcardItemTitle}>کاپوچینو</h3>
            <p className={styles.SpecialcardItemInfo}>
            قهوه تازه و گرمتون درکنار شماست و از اینکه در هوای سرد و گرم شمارو همراهی میکنه خرسندیم
            </p>
            <span className={styles.SpecialcardItemPrice}>فقط 100 تومان</span>
        </div>
    </div>
  )
}
