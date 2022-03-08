import { Container, Content } from "./styles";

import { BsArrowRightShort as Arrow } from 'react-icons/bs';
import Link from "next/link";

export function SectionOne() {
    return (
        <Container>
            <Content>
                <div>
                    <h2>Sua empresa Protegida!</h2>
                    <p>Nosso firewall possui tecnologia avançada para garantir a segurança de sua rede. </p>
                    <div className="linkDiv">
                        <Link href="/servicos/firewall#content">
                            <a >Seguro e sem complicações <Arrow /> </a>

                        </Link>

                    </div>

                </div>

                <img src="/firewall.webp" srcSet="/firewall.webp 480w, /firewall.webp 1080w" sizes="50vw" alt="Phone B2i" />
            </Content>
        </Container>
    )
}