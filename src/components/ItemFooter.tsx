import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    image: any;
    link: string
}

export function ItemFooter ( { image, link }:Props ) {
    return (
        <>
        <a href={link}>
            <div className="rounded-full  border-2 border-gray-300 hover:border-white p-2 hover:bg-white transition duration-500 text-white hover:text-primary-green">
                <FontAwesomeIcon icon={image} width={20} height={20} className=""/>
            </div>
        </a>
        </>
    )
}