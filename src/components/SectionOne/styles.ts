import styled from "styled-components";

export const Container = styled.section`
    background:#F0F0F0;
    height:600px;
    @media(max-width:1100px){
        height:auto;
    }
`;

export const Content = styled.div`
    max-width:1220px;
    padding:2rem 1rem;
    margin:0 auto;
    height:100%;
    
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    @media(max-width:1100px){
        flex-direction:column
    }

    img{
        height:425px;
        margin-right: -4rem;
        
        @media(max-width:1100px){
            width:100%;
            height:auto;
            margin-top:4rem;
            margin-right: 0rem;
        }
    }

    div{
        width:500px;

        @media(max-width:1100px){
           width:100%
        }

        h2{
            color:var(--text-title);
            font-size:2.5rem;
        }

        p{
            width:350px;
            color:var(--text-body);
            font-weight:600;
            font-size:2rem;
            margin:0rem 0 3rem;

            @media(max-width:1100px){
                width:100%
            }

        }

        &.linkDiv{
            display:flex;
            flex-direction:row;
            align-items:center;
            color:var(--text-title);

            a{
                color:var(--text-title);
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