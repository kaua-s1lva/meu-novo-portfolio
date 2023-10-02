import { Container } from "./Container";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import ItauLogo from "@/img/itau-logo.png"
import labTestesLogo from "@/img/lab-testes-logo.png"
import { ItemProject } from "./ItemProject";
import { ItemButton } from "./ItemButton";

export function SectionProject () {
    return (
        <div className="py-[70px] border-b-2" id="project">
            <h1 className="text-[33px] text-center mb-6 font-semibold">Meus Projetos</h1>
            <h2 className="text-[21px] text-center mb-6">Aqui estão alguns dos meus projetos. Deseja saber mais? <a href="#" className="text-primary-green">Contate-me</a></h2>
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.3%] py-16 w-[100%]">
                
                    <ItemProject image={ItauLogo} color="primary-itau-color" text="Site desenvolvido com base no design do Banco Itaú utilizando Next.js" />
                    <ItemProject image={labTestesLogo} color="primary-labtestes-color" text="Aplicar manutenção no site desenvolvido em Laravel" />
                    
                </div>
                    
            </Container>
            <div className="w-full flex items-center justify-center text-[21px] mt-[32px]">
                <a href="https://github.com/kaua-s1lva" target="_blank">
                    <ItemButton content="Confira meu GitHub" paddingX={30} paddingY={11} icon={faGithub}/>
                </a>
                <span></span>
            </div>
        </div>
    )
}