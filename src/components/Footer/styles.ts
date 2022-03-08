import styled from "styled-components";

export const Container = styled.footer`
    background:var(--shape);
    
`;

export const Content = styled.div`
    max-width:1220px;
    margin:0 auto;
    padding:4rem 1rem;

    @media(max-width:850px){
        height:auto;
    }
   
    section{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        
        @media(max-width:850px){
            grid-template-columns:initial;

            gap:2rem;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        div{
            display:flex;
            flex-direction:column;

            p{
                margin-bottom:0.5rem;
                font-weight:500;
            }

            a{
                color:var(--text-body);
                margin:0.25rem 0;
                font-size:0.9rem;

                @media(max-width:850px){
                    font-size:1rem;
                }
            }

            button{
                border:none;
                padding:0.5rem 2rem;
                width:200px;
                border-radius:0.25rem;
                font-weight:600;
                color:var(--text-title);

                transition:filter 0.2s;
                
                &:hover{
                    filter:brightness(0.9)
                }
            }
        }

        
        img{
            width:200px;
            justify-self: flex-end;
        }
    }

`;

export const SocialMidiaDiv = styled.div`
    max-width:1220px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    padding:1rem 0rem;

    @media(max-width:850px){
        justify-content:center; 
    }

    svg{
        font-size:3rem;
        fill:var(--text-body);
        transition: fill 0.2s;
        
        &:hover{
            fill:var(--text-title);
        }
    }
    svg:first-child{
        margin:0 0.5rem;
    }
`;

export const PosFooter = styled.div`
    background:var(--text-body);
    height:2.5rem;
    display:flex;
    align-items:center;
    color:var(--general);
    font-size:0.8rem;

    @media(max-width:850px){
        height:auto;
    }

    div{
        max-width:1220px;
        margin:0 auto; 
        width:100%;
        padding:0rem 1rem;
        text-align:center;

        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;

        @media(max-width:850px){
            flex-direction:column;
            padding:1rem 1rem;
        }
    }
`;
