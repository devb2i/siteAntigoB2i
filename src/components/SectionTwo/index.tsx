import { Container, Content } from "./styles";

import { BsArrowRightShort as Arrow } from 'react-icons/bs';
import Link from "next/link";

export function SectionTwo() {
    return (
        <Container>
            <Content>
                <img src="/MacBook.webp" srcSet="/MacBook.webp 480w, /MacBook.webp 1080w" sizes="50vw" alt="Phone B2i" />

                <div>
                    <h2>Infraestrutura de Redes</h2>
                    <p>Podem chamar com confiança. Além de especialistas, damos todo o suporte quando precisar!</p>
                    <div className="linkDiv">
                        <Link href="/servicos/Infraestrutura#content">
                            <a >Saiba mais <Arrow /></a>
                        </Link>


                    </div>

                </div>
            </Content>
        </Container>
    )
}