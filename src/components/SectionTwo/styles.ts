import styled from "styled-components";

export const Container = styled.section`
    background:var(--shape);
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
        height:375px;
        margin-left:-10rem;
        @media(max-width:1100px){
            order:1;
            margin-top:4rem;
            width:100%;
            height:auto;
            margin-left:0rem;
        }
    }
    div{
        width:500px;
        text-align:right;

        @media(max-width:1100px){
           width:100%
        }

        h2{
            color:var(--text-title);
            font-size:2.5rem;
        }

        p{
            color:var(--text-body);
            font-weight:600;
            font-size:2rem;
            margin:0rem 0 3rem;

        }

        &.linkDiv{
            display:flex;
            flex-direction:row;
            align-items:center;
            color:var(--text-title);
            justify-content:flex-end;

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