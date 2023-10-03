"use client";

import { Container } from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";

import Avatar from '@/img/avatar.png'
import ComputerVetor from '@/img/Browser stats-pana.png'

export function SectionHero () {

    const animeProps = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }

    return (
        <Container>
            <div 
                className=" pt-8 w-full flex flex-col justify-center items-center">
                <div className="p-14 relative">
                    <motion.h1 
                        className="relative md:text-5xl font-bold mb-6 text-center text-primary-dark-green text-4xl"
                        {...animeProps}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        Desenvolvedor Full Stack
                    </motion.h1>
                    <motion.h2 
                        className="text-2xl font-light mb-6 text-center text-primary-dark-green"
                        {...animeProps}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                    Sou apaixonado por desenvolvimento e sempre busco aprimorar minhas habilidades.
                    </motion.h2>
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <Image src={Avatar} alt="user-fig" className="my-8 flex m-auto"/>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Image src={ComputerVetor} alt="computer vetor" className="w-[400px]"/>
                </motion.div>
            </div>
        </Container>
    )
}