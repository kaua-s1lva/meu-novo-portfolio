import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    content: string;
    paddingX: number;
    paddingY: number;
    icon?: any;
}

export function ItemButton ( { content, icon, paddingX, paddingY }:Props ) {
    return (
        //colocar um degradê
        <button style={{padding: `${paddingY}px ${paddingX}px`}} className="border-2 rounded-full border-primary-green px-${paddingX} py-${paddingY} text-primary-green hover:text-white hover:bg-primary-green transition duration-500 flex gap-2">
            {icon && <FontAwesomeIcon icon={icon} className="mr-2" width={30}/>}{content}
        </button>
    )
}