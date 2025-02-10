'use client'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import ButtonBorder from '@/src/components/module/Button/ButtonBorder';
import ButtonFill from '@/src/components/module/Button/ButtonFill';

export default function Slider() {
    return (
        <div className={`h-screen relative hidden lg:block`}>
            <Swiper
                direction={'vertical'}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000, // تاخیر بین اسلایدها (بر حسب میلی‌ثانیه)
                    disableOnInteraction: true, // متوقف نشدن در هنگام تعامل کاربر
                }}
                modules={[Autoplay, Pagination]}
                className='mySwiper'
            >
                <SwiperSlide className={` relative z-[2]`}>
                    <div className={`relative`}>
                        <Image loading={'eager'} src='/bgs/bgHome1.svg' alt='coffee' width={120} height={80} className={`w-full h-full object-cover relative`} />
                        <div className={`absolute top-0 left-0 right-0 bg-[#00000082] w-full h-full`}  >

                        </div>
                    </div>
                    <div className={`absolute top-0 z-[4] w-full h-full flex justify-center flex-col items-end`}>
                        <h2 className={` mb-2 block text-white w-[450px] z-[14] text-right text-[55px]`}>
                            قهوه تازه و گرمتون درکنار شماست
                        </h2>
                        <div className={`mb-[28px] w-[450px] z-[14] block`}>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                          قهوه با تلخی ابتدا آغاز می کند !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         انسان با گریه آغاز می شود  !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         انسان با تلخی پایان میدهد !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         قهوه بعد تلخی تلخی معنا میدهد !
                        </p>
                        </div>
                        <div className={'block w-[450px] z[15]'}>
                            <ButtonFill href='/coffee_test' title='تست قهوه' />
                            <ButtonBorder href='/shop' title='خواندن بیشتر . . . ' />
                        </div>
                        <div className={`wraper_slider_home absolute bottom-[-2px] right w-full bg-black h-[172px] z-[3]`}></div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={`relative z-[2]`}>
                    <div className={`relative`}>
                        <Image loading={'eager'} src='/bgs/bgHome3.jpg' alt='coffee' width={2504} height={1668} className={`w-full h-full object-cover relative`} />
                        <div className={`absolute top-0 left-0 right-0 bg-[#00000082] w-full h-full`}  >

                        </div>
                    </div>
                    <div className={`absolute top-0 z-[4] w-full h-full flex justify-center flex-col items-end`}>
                        <h2 className={`mb-2 block text-white w-[450px] z-[14] text-right text-[55px]`}>
                            قهوه تازه و گرمتون درکنار شماست
                        </h2>
                        <div className={`mb-[28px] w-[450px] z-[14] block`}>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                          قهوه با تلخی ابتدا آغاز می کند !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         انسان با گریه آغاز می شود  !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         انسان با تلخی پایان میدهد !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         قهوه بعد تلخی تلخی معنا میدهد !
                        </p>
                        </div>
                        <div className={'block w-[450px] z[15]'}>
                            <ButtonFill href='/coffee_test' title='تست قهوه' />
                            <ButtonBorder href='/shop' title='خواندن بیشتر . . . ' />
                        </div>
                        <div className={` wraper_slider_home absolute bottom-[-2px] right w-full bg-black h-[172px] z-[3]`}></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={`relative z-[2]`}>
                    <div className={`relative`}>
                        <Image loading={'eager'} src='/bgs/bgHome2.jpg' alt='coffee' width={735} height={109} className={`w-full h-full object-cover relative`} />
                        <div className={`absolute top-0 left-0 right-0 bg-[#00000082] w-full h-full`}  >

                        </div>
                    </div>
                    <div className={`absolute top-0 z-[4] w-full h-full flex justify-center flex-col items-end`}>
                        <h2 className={`mb-2 block text-white w-[450px] z-[14] text-right text-[55px]`}>
                            قهوه تازه و گرمتون درکنار شماست
                        </h2>
                        <div className={`mb-[28px] w-[450px] z-[14] block`}>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                          قهوه با تلخی ابتدا آغاز می کند !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         انسان با گریه آغاز می شود  !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         انسان با تلخی پایان میدهد !
                        </p>
                        <p className={`text-[#ffffffac] text-sm block text-right w-full mb-[5px]`}>
                         قهوه بعد تلخی تلخی معنا میدهد !
                        </p>
                        </div>
                        <div className={'block w-[450px] z[15]'}>
                            <ButtonFill href='/coffee_test' title='تست قهوه' />
                            <ButtonBorder href='/shop' title='خواندن بیشتر . . . ' />
                        </div>
                        <div className={` wraper_slider_home absolute bottom-[-2px] right w-full bg-black h-[172px] z-[3]`}></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
