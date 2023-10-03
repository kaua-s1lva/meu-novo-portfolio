"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

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

type animeProps = ComponentProps<typeof motion.div>

export function ItemAbout ( { 
    hasBorder,
    image, 
    title, 
    contentTitle, 
    description, 
    contentDescription, 
    tools, 
    contentTools,
    ...props
}:Props & animeProps ) {

    const borderClass = hasBorder ? 'md:border-r md:border-l md:border-b-0 md:border-t-0 border-b border-t ' : '';

    return (
        <motion.div className={`relative py-[70px] px-[45px] sm:flex sm:items-center sm:flex-col md:w-[33.3%] text-[18px] ${borderClass}`} {...props}>
            <div className="w-[70px] h-[70px] rounded-full bg-primary-green flex items-center mx-auto">
                <FontAwesomeIcon icon={image} width={40} height={40} className=" text-primary-dark-green m-auto text-center text-3xl"/>
            </div>
            <h1 className="my-6 text-[24px] text-primary-dark-green text-center">{title}</h1>
            <p className="text-center">{contentTitle}</p>
            <p className="text-primary-green mt-[50px] text-center">{description}</p>
            <p className="text-center">{contentDescription}</p>
            <p className="text-primary-green mt-[50px] text-center">{tools}</p>
            <ul>
                {contentTools.map((tool, index) => (
                    <li key={index} className="mt-[4.5px] text-center">{tool}</li>
                ))}
            </ul>
        </motion.div>
    )
}