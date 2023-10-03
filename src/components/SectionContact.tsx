"use client";

import { Container } from "./Container";

import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { ItemButton } from "./ItemButton";
import { motion } from "framer-motion";

export function SectionContact () {

    const animeProps = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }

    return (
        <Container>
            <div className="py-[60px] md:py-[70px] w-full">
                <motion.h1 
                    className="text-[30px] text-center pb-6"
                    {...animeProps}
                    transition={{ duration: 0.5, delay: 0 }}
                >Interessado em colaborar comigo?
                </motion.h1>
                <motion.h2 
                    className="text-[21px] text-center pb-6"
                    {...animeProps}
                    transition={{ duration: 0.5, delay: 0 }}
                >Entre em contato:
                </motion.h2>
                <motion.div 
                    className="w-full flex justify-center items-center text-[21px] mt-8"
                    {...animeProps}
                    transition={{ duration: 0.5, delay: 0 }}
                >
                    <a href="https://wa.me/5528999779469">
                        <ItemButton content="Começar uma conversa" paddingX={30} paddingY={11} icon={faMessage}/>
                    </a>
                </motion.div>
                
            </div>
        </Container>
    )
}