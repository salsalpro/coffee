import React from 'react'
import styles from './ChefSuggest.module.css'
import Image from 'next/image'

export default function ChefSuggest() {
    return (
        <div className={styles.parent}>
            <div className={`${styles.BothSide}`}>
                <div className={styles.Images_Parent_4}>
                    <div className={`${styles.box} ${styles.box1}`}>
                        <Image alt='coffee' src='/posts/coffee_1.png' className={`${styles.Image_4_box} ${styles.Image_4_box_1}`} width={480} height={480} />
                    </div>
                    <div className={`${styles.box} ${styles.boxHaveText} ${styles.box2}`}>
                        <h2 className={`${styles.BoxText} ${styles.BoxText1}`}>قهوه صبگاهی خوشمزه</h2>
                    </div>
                    <div className={`${styles.box} ${styles.boxHaveText} ${styles.box3}`}>
                        <h2 className={`${styles.BoxText} ${styles.BoxText2}`}>قهوه صبگاهی خوشمزه</h2>
                    </div>
                    <div className={`${styles.box} ${styles.box4}`}>
                        <Image alt='coffee' src='/posts/coffee_2.png' className={`${styles.Image_4_box} ${styles.Image_4_box_2}`} width={480} height={480} />
                    </div>
                </div>
            </div>
            <div className={`${styles.BothSide}`}>
                <div className={styles.ChefSuggestSideBox}>
                    <img src='/image/chef.png' alt='chef' className={styles.ChefImage} />
                    <div className={styles.chef_desc}>
                        <h2 className={`${styles.chefMessage} mb-3`}>پیشنهاد سرآشبز</h2>
                        <div className={`${styles.title} mb-3 text-white`}>بهترین و خوشمزه ترین غذا روی میز شما  در هر نوعی که شما فکر میکنید امروز پیشنهاد سر آشپز</div>
                        <p className={`${styles.info}`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
