"use client"
import styles from '../../../template/home/ExcellentServices/styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';


const ExcellentServicesSlider = () => {


  return (
    <div className={`${styles.parentSlider} w-full `}>
      <Swiper
        // slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        className='w-full select-none cursor-grab'
        centeredSlides={false}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 4, 
          },
        }}
      >
     
     <SwiperSlide >
          <div className={`${styles.sliderItem} p-0 flex bg-black`} >
            <div className={`${styles.info} px-2 py-3`}>
              <div className={`${styles.infoIcon} block w-full mb-4`}>
                <Image className={`${styles.imageIcon} mx-auto my-0`} src={`/sliderExcellent/icons/cup.png`} alt='image' width={40} height={40} />
              </div>
              <h2 className={`${styles.title} text-center w-full block text-white mb-4`}>
                نوع قهوه
              </h2>
              <p className={`${styles.desc} text-center`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <div className={`${styles.imageBox}`}>
              <Image className={`${styles.SlidImage}`} src={'/sliderExcellent/slid1.png'} width={230} height={305} alt='image' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={`${styles.sliderItem} p-0 flex bg-black`} >
            <div className={`${styles.info} px-2 py-3`}>
              <div className={`${styles.infoIcon} block w-full mb-4`}>
                <Image className={`${styles.imageIcon} mx-auto my-0`} src={`/sliderExcellent/icons/coffee.png`} alt='image' width={40} height={40} />
              </div>
              <h2 className={`${styles.title} text-center w-full block text-white mb-4`}>
                نوع قهوه
              </h2>
              <p className={`${styles.desc} text-center`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <div className={`${styles.imageBox}`}>
              <Image className={`${styles.SlidImage}`} src={'/sliderExcellent/slid2.png'} width={230} height={305} alt='image' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={`${styles.sliderItem} p-0 flex bg-black`} >
            <div className={`${styles.info} px-2 py-3`}>
              <div className={`${styles.infoIcon} block w-full mb-4`}>
                <Image className={`${styles.imageIcon} mx-auto my-0`} src={`/sliderExcellent/icons/bread.png`} alt='image' width={40} height={40} />
              </div>
              <h2 className={`${styles.title} text-center w-full block text-white mb-4`}>
                نوع قهوه
              </h2>
              <p className={`${styles.desc} text-center`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <div className={`${styles.imageBox}`}>
              <Image className={`${styles.SlidImage}`} src={'/sliderExcellent/slid3.png'} width={230} height={305} alt='image' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={`${styles.sliderItem} p-0 flex bg-black`} >
            <div className={`${styles.info} px-2 py-3`}>
              <div className={`${styles.infoIcon} block w-full mb-4`}>
                <Image className={`${styles.imageIcon} mx-auto my-0`} src={`/sliderExcellent/icons/buttle.png`} alt='image' width={40} height={40} />
              </div>
              <h2 className={`${styles.title} text-center w-full block text-white mb-4`}>
                نوع قهوه
              </h2>
              <p className={`${styles.desc} text-center`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <div className={`${styles.imageBox}`}>
              <Image className={`${styles.SlidImage}`} src={'/sliderExcellent/slid4.png'} width={230} height={305} alt='image' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={`${styles.sliderItem} p-0 flex bg-black`} >
            <div className={`${styles.info} px-2 py-3`}>
              <div className={`${styles.infoIcon} block w-full mb-4`}>
                <Image className={`${styles.imageIcon} mx-auto my-0`} src={`/sliderExcellent/icons/buttle.png`} alt='image' width={40} height={40} />
              </div>
              <h2 className={`${styles.title} text-center w-full block text-white mb-4`}>
                نوع قهوه
              </h2>
              <p className={`${styles.desc} text-center`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <div className={`${styles.imageBox}`}>
              <Image className={`${styles.SlidImage}`} src={'/sliderExcellent/slid5.jpg'} width={474} height={474} alt='image' />
            </div>
          </div>
        </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default ExcellentServicesSlider;
