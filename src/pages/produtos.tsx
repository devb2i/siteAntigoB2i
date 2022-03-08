
import Head from 'next/head';
import { Container, Content } from '../styles/service';
import { listProduct } from '../productList';

export default function Produtos() {

    return (
        <>
            <Head>
                <title>Produtos | B2i Tecnologia - Especialistas para sua Empresa</title>


                <meta name="description" content="Especializados em tecnologia para garantir os melhores resultados para sua Empresa
                     Atuando de Goiânia para o Brasil, com sede em Goiais"/>
            </Head>
            <Container>
                <Content>
                    <h1>Lista de Produtos</h1>

                    <section className="listServico" style={{gridTemplateColumns:'repeat(2,1fr)'}}>

                        {listProduct.map(product => {
                            return (
                                <a href={`/produtos/${product.name}`} key={product.id}>
                                    <div  >
                                        {product.title}
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