import '@/src/styles/globals.css'

import AOSInit from '@/src/utils/aos'
import ScrollToTop from '@/src/utils/scrollToTop'

import { Vazirmatn } from 'next/font/google'
const vazir = Vazirmatn({ subsets: ['latin'] })


export const metadata = {
  title:'صفحه اصلی سایت کافی با ما',
  description: 'hi we are selling coffee we are coffee with us ',
  
  icons:{
    icon:'/coffee/coffee-5.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={vazir.className}>
        <AOSInit />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
