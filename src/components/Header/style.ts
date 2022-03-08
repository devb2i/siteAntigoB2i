import styled, { css }  from "styled-components";

export const Container = styled.header`
    background: linear-gradient(90deg, rgba(223,76,36,1) 0%, rgba(167,31,118,1) 100%);
    

    nav{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;

        height:6rem;
        max-width:1220px;
        margin:0 auto;
        padding:2rem 1rem;

        img{
            width:130px;
        }
        button{
            display:none;
            background:transparent;
            font-size:2.5rem;
            border:none;
            line-height:1rem;
            color:white;
            outline:none;
            cursor:pointer;

            @media(max-width:630px){
                display:inline;
            }
        }        
    }

    section{
        max-width:1220px;
        padding: 0rem 1rem;
        margin:0 auto;
        margin-bottom:3rem;

        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:flex-start;

        @media(max-width:1250px){
            flex-direction:column;
            align-items:center;
            text-align:center;
        }

        img{
            width:60%;

            @media(max-width:1250px){
                width:100%;
                margin-top:4rem;
                margin-bottom:-3rem
            }
        }
    }
`;



export const ContentTitle = styled.div`
    margin-top:4rem;
    color:var(--general);
    margin-right:2rem;

    @media(max-width:1250px){
        margin-right:0rem;
    }

    h1{
        font-size:2.5rem;
        text-transform:uppercase;
        font-weight:700;

        @media(max-width:1250px){
            font-size:2rem;
        }
    }
    p{
        font-size:1.5rem;
        margin-top:1rem;
    }

    button{
        border:none;
        background:var(--general);
        padding:0.5rem 3rem;
        color:var(--text-title);
        border-radius:2rem;
        font-weight:700;
        font-size:1rem;

        margin-top:1.5rem;

        transition:filter 0.2s;
                
        &:hover{
            filter:brightness(0.9)
        }
    }
`;