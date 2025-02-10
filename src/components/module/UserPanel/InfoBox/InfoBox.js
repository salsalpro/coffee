
export default async function InfoBox({ value, title, icon , bigNum}) {


    return (
        <div className="InfoBox rounded-lg col-span-1 flex flex-col relative bg-19 bx-shadow-less mb-12">
            <div className="icon block w-full p-4 flex justify-center">
                {icon}
            </div>
            <h2 className="title block w-full text-white text-lg text-center pt-3 pb-12">
                {title}
            </h2>
            <div className={`value absolute bottom-[-16px] rounded-full text-center right-0 left-0 mx-auto bg-D3AD7F text-white flex justify-center items-center pt-1 text-lg w-10 h-10 `}>
                {value}
            </div>
        </div>
    )
}
