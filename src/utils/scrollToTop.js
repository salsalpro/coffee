'use client'
import { useEffect, useState } from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";



function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false)
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }


    return (
        <div onClick={scrollToTop} className={`${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} flex z-50 transition-all-ease-03 fixed left-7 bottom-7 w-10 h-10 rounded bg-19 cursor-pointer justify-center items-center`}>
            <MdOutlineKeyboardArrowUp size={24} color="#D3AD7F" />
        </div>
    )
}

export default ScrollToTop