import { Container } from "./Container";

export function SectionAbout () {
    return (
        <div className="w-full bg-primary-green">
            <Container>
                <div className="text-white text-center w-[80%] m-auto mt-[160px] mb-[260px]">
                    <h1 className="text-[25px] font-bold mb-6">Olá, me chamo Kauã. Muito prazer!</h1>
                    <h2 className="text-[21px] ">
                    Meu primeiro contato com a programação foi em 2021, quando ainda estava no ensino médio, 
                    trabalhando como estagiário no setor financeiro, quando conheci o gerente de TI da empresa, 
                    ao qual ele me instigou a conhecer melhor a área da tecnologia, onde realizei projetos 
                    utilizando o PowerBI para otimizar e aprimorar meus trabalhos. Apesar de ter gostado da 
                    área, só comecei a estudar desenvolvimento web em 2022. 
                    <br />
                    Hoje já entendo de tecnologias voltadas para o Front-end e Back-end. Também gosto de "brincar" 
                    com design no figma, criando interfaces para projetos pessoais e de amigos.
                    </h2>
                </div>
            </Container>
        </div>

    )
}