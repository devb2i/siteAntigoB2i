import Link from "next/link";
import { Navbar } from "../Navbar";
import { Container, ContentTitle } from "./style";

export function Header() {


    return (
        <Container>
            <Navbar />

            <section>
                <ContentTitle>
                    <h1>Especialistas em Tecnologia</h1>
                    <p>
                        Especializados em Tecnologia para garantir os melhores resultados, de Goiânia para o Brasil
                    </p>
                    <Link href="/servicos#content">
                        <a>
                            <button>SAIBA MAIS </button>
                        </a>
                    </Link>

                </ContentTitle>
                
                    <img src="/bgHeader.webp" srcSet="/bgHeader.webp 480w, /bgHeader.webp 1080w" sizes="50vw" alt="Sistema B2I Firewall" />
                
            </section>

        </Container>
    );
}