import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    background:#fff;
`;

export const Content = styled.div`
    max-width:1120px;
    margin:0 auto;
    padding:4rem 2rem;

    display:flex;
    flex-direction:column;
    align-items:center;

    article{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:1rem;
        width:100%;

        p{
            color:var(--off-black);
            line-height:2rem;
            text-indent:2rem;
            margin:0.5rem 0;
        }
        img{
            height:100%;
            max-height:350px;
            margin-top:4rem;
            max-width:400px;
            margin-bottom:6rem;

            @media(max-width:500px){
                width:100%
            }
        }
        ul{
            align-self: flex-start;
            margin-left: 4rem;

            li{
                list-style-type: square;
                padding:0.5rem 0;
            }
        }
    }

    h1{
        text-transform:uppercase;
        margin-bottom:2rem;
    }

    section{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:1rem;

        @media(max-width:500px){
            grid-template-columns:repeat(2,1fr);
        }

        @media(max-width:300px){
            grid-template-columns:repeat(2,1fr);
        }

        div{
            background:var(--background);
            width:150px;
            height:150px;
            text-align:center;
            color:var(--off-black);
            align-items:center;
            justify-content:center;
            display:flex;

            transition:filter 0.2s;

            &:hover{
                filter:brightness(0.8);
            }
        }
    }
    

    
`;
