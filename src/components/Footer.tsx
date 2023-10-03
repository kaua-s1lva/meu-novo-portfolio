"use client";

import Image from "next/image"
import { motion } from "framer-motion"

import LogoWhite from "@/img/logo-white.png"
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
import { ItemFooter } from "./ItemFooter"
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container } from "./Container"

export function Footer () {
    return (
        <motion.div 
            className="bg-primary-green text-white text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <Container >
                <div className="py-5 md:py-20 mt-0 md:mt-20">
                    <Image src={LogoWhite} alt="logo" width={70} className="m-auto md:py-10 py-10"/>
                    <p className="text-[22px]">Programando o futuro, um código de cada vez</p>
                    <div className="flex items-center justify-center gap-6 py-10">
                        <ItemFooter image={faPhone} link="tel:+5528999779469"/>
                        <ItemFooter image={faEnvelope} link="mailto:kaua.ddsouza@gmail.com"/>
                        <ItemFooter image={faMessage} link="https://wa.me/5528999779469"/>
                        <ItemFooter image={faInstagram} link="https://www.instagram.com/kaua_s1lva/"/>
                        <ItemFooter image={faLinkedinIn} link="https://www.linkedin.com/in/kau%C3%A3-de-souza-da-silva/"/>
                    </div>
                    <p className="py-5">Desenvolvido por <span>Kauã Silva</span></p>
                    <p>&copy; Copyright - todos os direitos reservados</p>
                </div>

            </Container>
        </motion.div>
    )
}