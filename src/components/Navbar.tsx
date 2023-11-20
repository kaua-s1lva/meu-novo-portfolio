'use client';

import Image from "next/image"
import logo from '@/img/logo.png'
import { Container } from "./Container"
import { ItemButton } from "./ItemButton"
import Link from "next/link"
import { motion } from "framer-motion";

export function Navbar () {

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.querySelector('#project');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Container>
            <motion.nav 
                className="relative flex items-center justify-between"
                initial={{ top: -100 }}
                animate={{ top: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="py-[19.2px]">
                    <Image src={logo} alt="logo" width={55}/>
                </div>
                <div>
                    <ul className="flex justify-center gap-10 font-[500] text-[19px] items-center">
                        <li><Link scroll={true} href="#project" onClick={handleClick} className="text-primary-dark-green hover:text-primary-green transition duration-500 pb-2">Projetos</Link></li>
                        <li><a href="https://wa.me/5528999779469"><ItemButton content="Diga Olá" paddingX={20} paddingY={5} /></a></li>
                    </ul>
                </div>

            </motion.nav>
        </Container>
    )
}