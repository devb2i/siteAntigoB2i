
import Head from 'next/head';
import { Container, Content } from '../../styles/service';
import { listService } from '../../servicoList';

export default function ServicosHome() {

    return (
        <>
            <Head>
                <title>Serviços | B2i Tecnologia - Especialistas para sua Empresa</title>
                <meta name="title" content={`Serviços | B2i Tecnologia - Especialistas para sua empresa`} />

                <meta name="description" content="Especializados em tecnologia para garantir os melhores resultados para sua Empresa
                     Atuando de Goiânia para o Brasil, com sede em Goiais"/>
            </Head>
            <Container>
                <Content id="content">
                    <h1>Lista de Serviços</h1>

                    <section className="listServico" >

                        {listService.map(servico => {
                            return (
                                <a href={`/servicos/${servico.name}`} key={servico.id}>
                                    <div  >
                                        {servico.title}
                                    </div>
                                </a>
                            )
                        })}
                    </section>
                </Content>
            </Container>
        </>
    )
}