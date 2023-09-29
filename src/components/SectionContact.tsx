import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./Container";

import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { ItemContact } from "./ItemContact";
import { ItemButton } from "./ItemButton";

export function SectionContact () {
    return (
        <Container>
            <div className="py-[70px] w-full">
                <h1 className="text-[30px] text-center pb-6">Interessado em colaborar comigo?</h1>
                <h2 className="text-[21px] text-center pb-6">Entre em contato:</h2>
                <div className="w-full flex justify-center items-center text-[21px] mt-8">
                    <a href="https://wa.me/5528999779469">
                        <ItemButton content="Começar uma conversa" paddingX={30} paddingY={11} icon={faMessage}/>
                    </a>
                </div>
                
            </div>
        </Container>
    )
}