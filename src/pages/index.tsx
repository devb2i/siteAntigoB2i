import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionImage } from "../components/SectionImage";
import { SectionOne } from "../components/SectionOne";
import { SectionThree } from "../components/SectionThree";
import { SectionTwo } from "../components/SectionTwo";
import { GlobalStyle } from "../styles/global";

export default function Home() {
  return (
    <>
      <Head>
        <title>B2i Tecnologia | Consultoria em TI, Firewall, Infraestrutura</title>
        

        <meta name="description" content="Especializados em tecnologia para garantir os melhores resultados para sua Empresa
                     Atuando de Goiânia para o Brasil, com sede em Goiais"/>
      </Head>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionImage />


    </>
  )
}
