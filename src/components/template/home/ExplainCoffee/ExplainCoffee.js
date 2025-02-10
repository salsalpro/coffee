import React from 'react'
import styles from './explainCoffee.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ExplainCoffee() {
    return (
        <div className={`grid grid-cols-12 gap-4 items-center px-52 ${styles.explainCoffee}`}>
            <div className="col-span-4 justify-center flex">
                <Image className={styles.image} src='/coffee/coffeeUpOnly.svg' alt='coffee' width={182} height={177} />
            </div>
            <div className="col-span-4 text-center h-full">
                <h2 className={`${styles.Title_coffee} text-justify`}>در لحضه لذت ببر از قهوه داغ و بیدار کننده ای که تجربی زندگی میده شروع روزت با من پایانش با تو !</h2>
            </div>
            <div className="col-span-4 text-center h-full">
                <div className={styles.infos}>
                    <p className={`${styles.description} text-justify`}>برای شما هم این سوال پیش آمده که چرا و چگونه ساخت یک  قهوه در کافی با ما ساخته میشه و چجوری میتونید انلاین رزرو داشته باشید برای ادامه روی لینک زیر کلیک کنی</p>
                    <Link href='/about' className={styles.LinkInfo}>درباره ما</Link>
                </div>
            </div>
        </div>
    )
}
