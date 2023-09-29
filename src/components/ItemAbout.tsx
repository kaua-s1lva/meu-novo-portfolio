import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    hasBorder?: boolean;
    image: any;
    title: string;
    contentTitle: string;
    description: string;
    contentDescription: string;
    tools: string;
    contentTools: string[];
}

export function ItemAbout ( { 
    hasBorder,
    image, 
    title, 
    contentTitle, 
    description, 
    contentDescription, 
    tools, 
    contentTools, 
}:Props ) {

    const borderClass = hasBorder ? 'border-r border-l' : '';

    return (
        <div className={`py-[70px] px-[45px] flex items-center flex-col w-[33.3%] text-[18px] ${borderClass}`}>
            <div className="w-[70px] h-[70px] rounded-full bg-primary-green flex items-center">
                <FontAwesomeIcon icon={image} width={40} className=" text-primary-dark-green m-auto"/>
            </div>
            <h1 className="my-6 text-[24px] text-primary-dark-green">{title}</h1>
            <p className="text-center">{contentTitle}</p>
            <p className="text-primary-green mt-[50px]">{description}</p>
            <p>{contentDescription}</p>
            <p className="text-primary-green mt-[50px]">{tools}</p>
            <ul>
                {contentTools.map((tool, index) => (
                    <li key={index} className="mt-[4.5px] text-center">{tool}</li>
                ))}
            </ul>
        </div>
    )
}