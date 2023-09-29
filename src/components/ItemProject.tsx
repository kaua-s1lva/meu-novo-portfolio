import Image, { StaticImageData } from "next/image"

type Props = {
    image: StaticImageData;
    text: string;
    color: string;
}

type ColorClassesType = {
    [key: string]: string;
};

const colorClasses: ColorClassesType = {
    'primary-itau-color': 'bg-primary-itau-color',
    'primary-labtestes-color': 'bg-primary-labtestes-color'
}

export function ItemProject ( { image, text, color }:Props ) {
    return (
        <div className={`relative border rounded-3xl h-64 hover:bg-gradient-to-br from-second-dark-green from-10% to-primary-dark-green to-100% group ${colorClasses[color]}`}>
            <Image src={image} alt="itau project" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:hidden" width={180}/>
            <div className="flex flex-col justify-between h-64 py-5 px-10 ">
                <p className="text-center text-white text-[20px] hidden group-hover:block">{text}</p>
                <button className="hidden group-hover:block text-white border-2 rounded-full border-primary-green text-[20px] py-2 hover:bg-primary-green transition duration-500">Visitar WebSite</button>
            </div>
        </div>
    )
}