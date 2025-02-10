import React from 'react'
import ExcellentServicesSlider from '@/src/components/module/home/ExcellentServicesSlider/ExcellentServicesSlider'
import styles from './styles.module.css'


export default function ExcellentServices() {
    return (
        <div className={styles.parent}>
            <h2 className='titleLine mb-3'>خدمات عالی</h2>
            <ExcellentServicesSlider />
        </div>
    )
}
