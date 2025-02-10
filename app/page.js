import Navbar from "@/src/components/module/Navbar/Navbar"
import Slider from "@/src/components/template/home/slider/Slider"
import CoffeeMobileTopPic from "@/src/components/template/home/CoffeeMobileTopPic/CoffeeMobileTopPic"
import ExplainCoffee from "@/src/components/template/home/ExplainCoffee/ExplainCoffee"
import PopulerMenuParent from "@/src/components/template/home/populerMenu/populerMenu"
import SpecialSection from "@/src/components/template/home/SpecialSection/SpecialSection"
import ChefSuggest from "@/src/components/template/home/ChefSuggest/ChefSuggest"
import GuestMessage from "@/src/components/template/home/GuestMessage/GuestMessage"
import ExcellentServices from "@/src/components/template/home/ExcellentServices/ExcellentServices"
import Contact from "@/src/components/template/home/Contact/Contact"
import Footer from "@/src/components/module/Footer/Footer"

export default async function page() {

  return (
    <>
      <Navbar />
      <Slider />
      <CoffeeMobileTopPic />
      
      <ExplainCoffee />
      <PopulerMenuParent />
      <SpecialSection />
      <ChefSuggest />
      <GuestMessage />
      <ExcellentServices />
      <Contact />
      <Footer />
    </>

  )
}
