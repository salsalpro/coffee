import Image from "next/image";

export default function CoffeeMobileTopPic() {
    return (
        <div className={`h-screen relative block lg:hidden p-3 bg-19`}>
         


         <div className="button_logo w-full flex justify-center absolute bottom-[-40px] w-full left-0 right-0">
            <Image src={'/bgs/SubtractRightTop19.png'} alt="SubtractRightTop19" width={508} height={508} className="h-10 w-10 relative " />
            <Image src={'/bgs/SubtractLeftTop19.png'} alt="SubtractLeftTop19" width={508} height={508} className="h-10 w-10 relative l" />
         </div>
        </div>
    )
}
