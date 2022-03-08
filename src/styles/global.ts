import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background:#F0F0F0;
        --red:#E52E4D;
        --green:#33cc95;
        --black:#222;
        --off-black:#333;
        --text-title:#a71f76;
        --text-body:#101010;
        --general:#eee;
        --shape:#fff;
        --input-bg:#e7e9ee;
    }   

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    // font-size: 16px - PADRÃO DESKTOK

    html{
        scroll-behavior: smooth;
        @media(max-width:1080px){
            font-size:93.75%; // = 15px
        }

        @media(max-width:720px){
            font-size:87.5%; // = 14px
        }
    }

    body{
        background:var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family:'Poppins',sans-serif;
        font-weight:400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight:600;
    }

    button{
        cursor:pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }

    a{
        text-decoration:none;
        color:var(--shape);
    }

   
`;