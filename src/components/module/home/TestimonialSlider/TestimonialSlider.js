'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from '../../../template/home/GuestMessage/styles.module.css';
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "ماهش بابو",
        role: "دانش‌آموز",
        image: "/users/user1.png",
        feedback: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. نونک ولوپتاته لیبرو و ولت اینترودم.",
    },
    {
        id: 2,
        name: "جان دو",
        role: "طراح",
        image: "/users/user2.png",
        feedback: "نونک ولوپتاته لیبرو و ولت اینترودم، به همراه استایل‌های مختلف متون.",
    },
    {
        id: 3,
        name: "جین اسمیت",
        role: "توسعه‌دهنده",
        image: "/users/user3.png",
        feedback: "اینتگر فویگات جاستو او دوعی اولامکورپر، و دیکتوم ریسوس الیفند.",
    },
    {
        id: 4,
        name: "جین اسمیت",
        role: "توسعه‌دهنده",
        image: "/users/user1.png",
        feedback: "اینتگر فویگات جاستو او دوعی اولامکورپر، و دیکتوم ریسوس الیفند.",
    },
    {
        id: 5,
        name: "جین اسمیت",
        role: "توسعه‌دهنده",
        image: "/users/user2.png",
        feedback: "اینتگر فویگات جاستو او دوعی اولامکورپر، و دیکتوم ریسوس الیفند.",
    }, 
    {
        id: 6,
        name: "جین اسمیت",
        role: "توسعه‌دهنده",
        image: "/users/user3.png",
        feedback: "اینتگر فویگات جاستو او دوعی اولامکورپر، و دیکتوم ریسوس الیفند.",
    },   
];

const TestimonialSlider = () => {
    // State to hold the index of active slide
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle slide change
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex); // Real index to prevent looping
    };

    return (
        <div className={`h-80`}>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                loop={true}
                centeredSlides={true}
                onSlideChange={handleSlideChange}
                className={`${styles.guestMessagesParent} h-full`}
                scrollbar={{ draggable: false }} 
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id} className={`${activeIndex === index ? styles.activeSlide : ''} overflow-visible relative h-full items-center`}>
                        <div className={`${styles.guestMessagesItem} my-auto`}>
                            <div className={styles.placeForVictors}>
                                <img src="/image/,,.png" alt="logo" className={`${styles.Vectors} ${styles.VectorsWhite}`} />
                                <img src="/image/VectorBlack.png" alt="logo" className={`${styles.Vectors} ${styles.VectorsBlack}`} />
                            </div>
                            <p className={`${styles.feedBack} mb-6`}>
                                {testimonial.feedback}
                            </p>
                            <div className={`${styles.user_info}`}>
                                <img src={testimonial.image} alt="user" className={`${styles.userImage} select-none`} />
                                <h4 className={`${styles.name} select-none`}>{testimonial.name}</h4>
                                <h4 className={`${styles.role} select-none`}>{testimonial.role}</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
