import { Container } from "./Container";
import Image from "next/image";

import Avatar from '@/img/avatar.png'
import ComputerVetor from '@/img/Browser stats-pana.png'

export function SectionHero () {
    return (
        <Container>
            <div className="pt-8 w-full flex flex-col justify-center items-center">
                <div className="p-14 ">
                    <h1 className="md:text-5xl font-bold mb-6 text-center text-primary-dark-green text-4xl">Desenvolvedor Full Stack</h1>
                    <h2 className="text-2xl font-light mb-6 text-center text-primary-dark-green">Sou apaixonado por desenvolvimento e sempre busco aprimorar minhas habilidades.</h2>
                    <Image src={Avatar} alt="user-fig" className="my-8 flex m-auto"/>
                </div>
                <Image src={ComputerVetor} alt="computer vetor" className="w-[400px]"/>
            </div>
        </Container>
    )
}