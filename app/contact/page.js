// import React from 'react'
// import Navbar from '@/src/components/module/Navbar/Navbar'
// import Footer from '@/src/components/module/Footer/Footer'
// import { MdEmail } from "react-icons/md";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaPhoneVolume } from "react-icons/fa6";
// import styles from './styles.module.css'
// import Link from 'next/link';
// import Form from './Form';
// import MyMap from './Map';



// export default function About() {

//     return (
//         <div className={`w-full h-full`}>
//             <Navbar with_bg={true}  />
//             <div className="bg-101011 p-6 mt-74">
//                 <h2 className='w-full text-center text-3xl titleLine'>ارتباط سریع</h2>
//                 <div className="communication_method flex justify-center mb-6">
                   

//                     <Link href={'https://www.instagram.com/salsal.pro'} >
//                         <div className={`${styles.itemParent} flex justify-start w-64`}>
//                             <div className={`${styles.iconParent} flex justify-center items-center transition-all-ease-03 w-12 h-12 rounded-full mx-3`}>
//                                 <FaSquareInstagram className={`${styles.icon} transition-all-ease-03`} size={23} />
//                             </div>
//                             <div className="info flex flex-col mx-3">
//                                 <h3 className="text-lg text-D3AD7F">اینستاگرام</h3>
//                                 <p className='text-sm text-white'>salsal.pro</p>
//                             </div>
//                         </div>
//                     </Link>

//                     <Link href={'to.salsal.pro@gmail.com'} >
//                         <div className={`${styles.itemParent} flex justify-center w-64`}>
//                             <div className={`${styles.iconParent} flex justify-center items-center transition-all-ease-03 w-12 h-12 rounded-full mx-3`}>
//                                 <MdEmail className={`${styles.icon} transition-all-ease-03`} size={23} />
//                             </div>
//                             <div className="info flex flex-col mx-3">
//                                 <h3 className="text-lg text-D3AD7F">ایمیل</h3>
//                                 <p className='text-sm text-white'>to.salsal.pro@gmail.com</p>
//                             </div>
//                         </div>
//                     </Link>

//                     <Link href={'tel:+989925202638'} >
//                         <div className={`${styles.itemParent} flex justify-end w-64`}>
//                             <div className={`${styles.iconParent} flex justify-center items-center transition-all-ease-03 w-12 h-12 rounded-full mx-3`}>
//                                 <FaPhoneVolume className={`${styles.icon} transition-all-ease-03`} size={23} />
//                             </div>
//                             <div className="info flex flex-col mx-3">
//                                 <h3 className="text-lg text-D3AD7F">تماس</h3>
//                                 <p className='text-sm text-white'>09925202638</p>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//                 <Form />
//                 <MyMap />
//             </div>
//             <Footer />
//         </div>
//     );
// }


////////////

export default function Contact() { 
    
    return <h1>about</h1>
}