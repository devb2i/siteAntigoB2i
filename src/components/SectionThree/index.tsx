import { Container, Content } from "./styles";

import { FiArrowUpRight as Arrow } from 'react-icons/fi';
import Link from "next/link";

export function SectionThree() {
    return (
        <Container>
            <Content>
                <div>
                    <div className="logosServidor">
                        <img src="/azure.webp" alt="azure" />
                        <img src="/microsoft2.webp" alt="microsoft 365" />
                    </div>
                    <h2>Computação em Nuvem</h2>
                    <p>Alta performance e <br /> segurança para <br /> seus dados</p>
                    <div className="linkDiv">
                        <Link href="/servicos/Azure#content">
                        
                            <a  >Saiba mais <Arrow /></a>
                            
                        </Link>

                    </div>

                </div>

                <img src="/server.webp" srcSet="/server.webp 480w, /server.webp 1080w" sizes="50vw"  alt="Server B2i" />
            </Content>
        </Container>
    )
}