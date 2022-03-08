
import {AiFillLinkedin as Linkedin, AiFillInstagram as Instagram} from 'react-icons/ai';


import { Container, Content, PosFooter, SocialMidiaDiv } from "./styles";
import Link from 'next/link';
import { listService } from '../../servicoList';
import { listProduct } from '../../productList';

export function Footer(){
    return(
        <Container>
            <Content>
                <section>
                    <div>
                        <p>Institucional</p>
                        <Link href="/sobrenos">
                            <a>Sobre nós</a>
                        </Link>
                        
                        <a href="https://api.whatsapp.com/send/?phone=62996781148">Contato</a>
                        <a href="/">Instagram</a>
                        <a href="/">Linkedin</a>
                    </div>
                    <div>
                        <p>Serviços</p>
                        {listService.map(item=>(
                            <Link key={item.id} href={`/servicos/${item.name}#content`}>
                                <a>
                                    {item.title}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div>
                    <p>Produtos</p>
                        {listProduct.map(item=>(
                            <Link key={item.id} href={`/produtos/${item.name}#content`}>
                                <a>
                                    {item.title}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <p>Central de Ajuda</p>
                        <a href="https://suporte.b2iti.com.br/">
                            <button>TIRE SUAS DÚVIDAS</button>
                        </a>
                    </div>
                    <img src="/logoColor.svg" alt=""/>
                </section>
                
                <SocialMidiaDiv>
                    <a href="/"><Linkedin/></a>
                    <a href="/"><Instagram/></a>
                </SocialMidiaDiv>
            </Content>
            <PosFooter>
                <div>
                    <p>Copyright © 2021 www.b2iti.com.br, TODOS OS DIREITOS RESERVADOS. </p>
                    <p>Desenvolvido por <a href="https://www.lmgassociados.com.br">Agência LMG</a></p>
                </div>
            </PosFooter>
        </Container>
    );
}