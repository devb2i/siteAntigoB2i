
import Head from 'next/head';
import { useRouter } from 'next/router'
import { listProduct } from '../../productList';
import { Container, Content } from '../../styles/service';

export default function Produto() {
    const router = useRouter();
    const { produto } = router.query;

    const productList = listProduct.filter(item => item.name == produto);
    const title = listProduct.map(item => (item.title));

    return (
        <>
            <Head>
                <title>{title} | B2i Tecnologia</title>
            </Head>
            <Container>
                <Content id="content">

                    {productList.map(service => {
                        return (

                            <div key={service.id}>
                                {service.moreProducts === true ?
                                    service.products.map(item=>(
                                        <div key={item.id}>
                                            <h1>{item.product}</h1>
                                            <p>{item.text}</p>
                                            <img src={item.image} alt={item.product} />
                                        </div>
                                    ))
                                    
                                    :
                                    <>
                                        <h1>{service.title}</h1>
                                        <p>{service.text}</p>
                                        <img src={service.image} alt={service.name} />
                                        {service.text2 !== '' && 
                                            <p>{service.text2}</p>
                                        }
                                    </>
                                }

                            </div>
                        )
                    })}


                </Content>
            </Container>
        </>
    );
}