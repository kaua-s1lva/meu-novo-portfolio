import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    icon: any;
    content: string;
}

export function ItemContact ( { icon, content }:Props ) {
    return (
        <div className="flex gap-5 items-center my-5">
            {icon && <FontAwesomeIcon icon={icon} className="text-primary-green" width={30}/>}
            <p>{content}</p>
        </div>
    )
}