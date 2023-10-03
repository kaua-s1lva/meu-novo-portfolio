import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    image: any;
    link: string
}

export function ItemFooter ( { image, link }:Props ) {
    return (
        <>
        <a href={link}>
            <div className="rounded-full w-10 h-10 border-2 border-gray-300 hover:border-white p-2 hover:bg-white transition duration-500 text-white hover:text-primary-green">
                <FontAwesomeIcon icon={image} style={{ fontSize: '20px' }} />
            </div>
        </a>
        </>
    )
}