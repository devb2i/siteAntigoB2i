import Document,{Html,Head,Main,NextScript} from 'next/document';

export default class MyDocument extends Document{
    
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>

                    <link rel="shortcut icon" href="/favicon.png" type="image/png"/>

                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>

                    <script src="../callbell.js" type="text/javascript"></script>

                    <meta name="keywords" content="Firewall, Suporte TI, Goiânia, Goiais, Tecnologia, Empresa, Gestão, Projeto de Rede, Infraestrutura, Antivirus, Backup, Servidores, Catalão"/>
                    
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}