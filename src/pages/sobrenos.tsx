
import Head from 'next/head';
import { Container, Content } from '../styles/service';

export default function Servicos() {
    return (
        <>
            <Head>
                <title>Sobre nós | B2i Tecnologia Especialistas em Tecnologia</title>

                <meta name="description" content="Especializados em tecnologia para garantir os melhores resultados para sua Empresa
                     Atuando de Goiânia para o Brasil, com sede em Goiais"/>
            </Head>
            <Container>
                <Content>

                    <div>
                        <h1>Sobre nós</h1>
                        <p>A b2i Tecnologia é uma empresa de serviços de TI de Goiânia que foi criada para oferecer a você serviços de excelência,
                            incluindo gestão eficiente e estratégias eficazes, redução de custos e processos avançados, sempre considerando 
                            a melhor solução para o sucesso da sua empresa atendendo toda Goiais e Brasil!. 

                        Nosso principal objetivo é ajudar você nos desafios do seu negócio.
                         Nossa empresa possui um corpo de profissionais com larga experiência no que se propõe a desenvolver,
                          entregando segurança, confiabilidade, responsabilidade e comprometimento para encontrar as soluções
                           ideais para seus desafios e impulsionar a inovação necessária para garantir que sua empresa prospere por todo
                           o brasil. </p>
                           <p>
                               Especialistas em Firewall, CSTV, Infraestrutura de Redes, Gestão e Suporte de TI, Servidores e muito mais!
                           </p>
                    </div>



                </Content>
            </Container>
        </>
    );
}