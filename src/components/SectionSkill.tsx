import { Container } from "./Container";

import CodeBackIcon from "@/img/code-icon.png"
import { ItemAbout } from "./ItemAbout";
import { faCode, faTerminal, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'

export function SectionSkill () {
    return (
        <Container>
            <div className="flex justify-center border rounded-3xl relative top-[-100px] bg-white shadow-lg">

                <ItemAbout
                hasBorder={false}
                image={faCode} 
                title="Desenvolvedor Front End" 
                contentTitle="Minha paixão é construir do zero com códigos, e é incrível ver as ideias ganharem forma no navegador." 
                description="linguagens que domino:"
                contentDescription="HTML, CSS, JavaScript"
                tools="Dev Tools:"
                contentTools={["React", "Next", "Bootstrap", "Tailwind", "WordPress", "Elementor"]}
                />
                <ItemAbout 
                hasBorder={true}
                image={faTerminal} 
                title="Desenvolvedor Back End" 
                contentTitle="Trabalho com competência no back-end, garantindo que tudo esteja em harmonia por trás dos panos." 
                description="linguagens que domino:"
                contentDescription="JavaScript, PHP, Python, C, SQL"
                tools="Dev Tools:"
                contentTools={["JQuery", "Django", "Laravel"]}
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
                />
                
            </div>

        </Container>
    )
}