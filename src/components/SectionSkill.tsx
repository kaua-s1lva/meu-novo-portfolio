"use client";

import { Container } from "./Container";

import { ItemAbout } from "./ItemAbout";
import { faCode, faTerminal, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'

export function SectionSkill () {

    const animeProps = {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    }

    return (
        <Container>
            <div className="flex flex-col md:flex-row justify-center border rounded-3xl relative top-[-100px] bg-white shadow-lg">

                <ItemAbout
                hasBorder={false}
                image={faCode} 
                title="Desenvolvedor Front End" 
                contentTitle="Minha paixão é construir do zero com códigos, e é incrível ver as ideias ganharem forma no navegador." 
                description="linguagens que domino:"
                contentDescription="HTML, CSS, JavaScript"
                tools="Dev Tools:"
                contentTools={["React", "Next", "Bootstrap", "Tailwind", "WordPress", "Elementor"]}
                {...animeProps}
                transition={{ duration: 0.5, delay: 0.3 }}
                />
                <ItemAbout 
                hasBorder={true}
                image={faTerminal} 
                title="Desenvolvedor Back End" 
                contentTitle="Trabalho com competência no back-end, garantindo que tudo esteja em harmonia por trás dos panos." 
                description="linguagens que domino:"
                contentDescription="JavaScript, PHP, Python, C, SQL"
                tools="Dev Tools:"
                contentTools={["JQuery", "Django", "Laravel", "mySQL"]}
                {...animeProps}
                transition={{ duration: 0.5, delay: 0.5 }}
                />
                <ItemAbout 
                hasBorder={false}
                image={faPenToSquare} 
                title="Designer" 
                contentTitle="Como designer, dou vida às ideias, transformando conceitos abstratos em designs visuais cativantes." 
                description="habilidades que domino:"
                contentDescription="Components, Responsive, Grid, Cores"
                tools="Dev Tools:"
                contentTools={["Figma", "Photoshop", "Canva", "Corel Draw"]}
                {...animeProps}
                transition={{ duration: 0.5, delay: 0.7 }}
                />
                
            </div>

        </Container>
    )
}