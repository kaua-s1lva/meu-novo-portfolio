"use client";

import { Container } from "./Container";
import { motion } from "framer-motion";

export function SectionAbout () {
    return (
        <motion.div className="relative w-full bg-primary-green"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <Container>
                <div className="text-white text-center w-[100%] sm:w-[80%] m-auto pt-[100px] md:pt-[160px] pb-[200px] md:pb-[260px]">
                    <h1 className="text-[25px] font-bold mb-6">Olá, me chamo Kauã. Muito prazer!</h1>
                    <h2 className="text-[21px]">
                    Meu primeiro encontro com a programação ocorreu em 2021, durante meu período no ensino médio. 
                    Na época, eu estava atuando como estagiário no departamento financeiro, onde tive a oportunidade de 
                    conhecer o gerente de TI da empresa. Ele me incentivou a explorar o campo da tecnologia, o que me 
                    levou a trabalhar em projetos utilizando o PowerBI para otimizar e aprimorar minhas tarefas. Embora 
                    tenha me interessado pela área, só comecei a me dedicar ao estudo do desenvolvimento web em 2022.
                    <br />
                    Atualmente, possuo conhecimentos em tecnologias voltadas para o Front-end e Back-end. Além disso, 
                    gosto de exercitar minha criatividade no Figma, desenvolvendo interfaces para projetos pessoais e de amigos.
                    </h2>
                </div>
            </Container>

                
    
        </motion.div>

    )
}