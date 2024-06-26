"use client";

import { Container } from "./Container";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";

import ItauLogo from "@/img/itau-logo.png"
import labTestesLogo from "@/img/lab-testes-logo.png"
import teamGabProject from "@/img/team-gab-logo.png"
import cineticaLogo from "@/img/logo-cinetica.ico"
import qvagasLogo from "@/img/logo-qvagas.webp"
import { ItemProject } from "./ItemProject";
import { ItemButton } from "./ItemButton";

export function SectionProject () {

    const animeProps = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }

    return (
        <div className="md:py-[70px] py-[0px] border-b-2" id="project">
            <motion.h1 
                className="text-[33px] text-center mb-6 font-semibold"
                {...animeProps}
                transition={{ duration: 0.5, delay: 0 }}
            >
            Meus Projetos
            </motion.h1>
            <motion.h2 
                className="text-[21px] text-center mb-6"
                {...animeProps}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
            Aqui estão alguns dos meus projetos. Deseja saber mais? <a href="https://wa.me/5528999779469" className="text-primary-green">Contate-me</a>
            </motion.h2>
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.3%] md:py-16 py-0 w-[100%]">
                
                    <ItemProject image={ItauLogo} color="primary-itau-color" delay={0.1} href="https://portfolio-itau.vercel.app/" text="Site desenvolvido com base no design do Banco Itaú utilizando Next.js" />
                    <ItemProject image={labTestesLogo} color="primary-labtestes-color" delay={0.2} href="https://labtestes.labcarreiras.com.br/" text="Aplicar manutenção no site desenvolvido em Laravel" />
                    <ItemProject image={teamGabProject} color="primary-teamgab-color" delay={0.3} href="https://www.teamgab.com.br/" text="Desenvolvimento do portfólio de consultoria" />
                    <ItemProject image={qvagasLogo} color="primary-qvagas-color" delay={0.4} href="https://qvagas.quallitypsi.com.br/" text="Manutenção no site e no portal Qvagas." />                    
                    <ItemProject image={cineticaLogo} color="primary-labtestes-color" delay={0.5} href="https://portal.cineticajr.com" text="Criação de um sistema de gerencimento da empresa do zero. " />

                </div>
                    
            </Container>
            <motion.div 
                className="w-full flex items-center justify-center text-[21px] mt-[32px] mb-[60px]"
                {...animeProps}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <a href="https://github.com/kaua-s1lva" target="_blank">
                    <ItemButton content="Confira meu GitHub" paddingX={30} paddingY={11} icon={faGithub}/>
                </a>
                <span></span>
            </motion.div>
        </div>
    )
}