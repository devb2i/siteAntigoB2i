import styled from "styled-components";
import { setLightness } from 'polished';

export const Container = styled.section`
    background:var(--text-title);
    
`;

export const Content = styled.div`
    max-width:1220px;
    padding:1rem 1rem;
    margin:0 auto;
    height:100%;
    
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    @media(max-width:1080px){
        flex-direction:column;
        padding:8rem 1rem;
    }

    img{
        width:550px;
        margin-top:5rem;

        @media(max-width:850px){
            width:100%;
            height:auto;
        }
    }
    div{
        width:500px;

        @media(max-width:850px){
           width:100%
        }

        &.logosServidor{
            display:flex;
            flex-direction:row;
            align-items:flex-end;

            img{
                width:150px;

                & + img{
                    margin-left:1rem;
                }
            }
        }

        h2{
            color:${setLightness(0.7, '#a71f76')};
            font-size:2.5rem;
        }

        p{
            color:var(--general);
            font-weight:500;
            font-size:2rem;
            margin:0 0 3rem;

        }

        &.linkDiv{
            display:flex;
            flex-direction:row;
            align-items:center;
            color:var(--general);

            a{
                color:var(--general);
                font-size:1rem;
                font-weight:600;
                margin-right:0.25rem;
            }

            svg{
                font-size:1.5rem;
            }
        }
    }

    
    
`;