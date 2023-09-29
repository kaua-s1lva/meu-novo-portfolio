'use client';

import Image from "next/image"
import logo from '@/img/logo.png'
import { Container } from "./Container"
import { ItemButton } from "./ItemButton"
import Link from "next/link"

export function Navbar () {

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.querySelector('#project');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Container>
            <div className="py-[19.2px]">
                <Image src={logo} alt="logo" width={55}/>
            </div>
            <div>
                <ul className="flex justify-center gap-10 font-[500] text-[19px] items-center">
                    <li><Link scroll={true} href="#project" onClick={handleClick} className="text-primary-dark-green hover:text-primary-green transition duration-500 pb-2">Projetos</Link></li>
                    <li><a href="#"><ItemButton content="Diga Olá" paddingX={20} paddingY={5} /></a></li>
                </ul>
            </div>
        </Container>
    )
}