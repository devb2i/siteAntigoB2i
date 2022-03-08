import styled from "styled-components";

export const Container = styled.section`

    
`;

export const ImageSectionDiv = styled.div`
    

    header{
        max-width:1220px;
        margin:0 auto;
        padding:2rem 1rem;

        color:var(--general);
        font-weight:600;
        font-size:2rem;

        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;

        height:100%;

        p{
            width:400px;
            font-size:2.5rem;
            line-height:3rem;
            font-weight:600;

            @media(max-width:850px){
                width:100%
            }
        }

        a{
            font-size:1rem;
            margin-top:2rem;
            
            display:flex;
            flex-direction:row;
            align-items:center;

            transition: color ease-in-out 0.2s;
            
            &:hover{
                color:var(--text-title);
    
            }

            svg{
                font-size:1.5rem;
            } 

            
        }
    }
    
`;