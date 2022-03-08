
import Head from 'next/head';
import { useRouter } from 'next/router'
import { listService } from '../../servicoList';
import { Container, Content } from '../../styles/service';

interface serviceListData {
    id: number;
    name: string;
    title: string;
    text: string;
    image: string;
    text2?: string;
    list?: string[];
}

export default function Servicos() {
    const router = useRouter();
    const { servico } = router.query;

    const servicoList = listService.filter(item => item.name == servico);
    const title = servicoList.map(item => (item.title));
    const description = servicoList.map(item => item.text.substring(0,150));


    return (
        <>
            <Head>
                <title>{title} | B2i Tecnologia - Especialistas para sua Empresa</title>
                <meta name="title" content={`${title} | B2i Tecnologia - Especialistas para sua empresa`} />

                <meta name="description" content={description[0]} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${title} | B2i Tecnologia - Especialistas para sua empresa`} />
                <meta property="og:description" content={description[0]} />
                <meta property="og:image" content="/logoColor.svg" />

                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="Portuguese" />

            </Head>
            <Container>
                <Content id="content">

                    {servicoList.map(service => {
                        return (

                            <article key={service.id} >
                                <h1>{service.title}</h1>
                                <p>{service.text}</p>
                                {service.text2 !== '' &&
                                    <p>{service.text2}</p>
                                }
                                {service.list.length > 0 &&
                                    <ul>
                                        {service.list.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                }
                                {service.text3 !== '' &&
                                    <p>{service.text3}</p>
                                }
                                <img src={service.image} alt={service.name} />

                            </article>
                        )
                    })}


                </Content>
            </Container>
        </>
    );
}