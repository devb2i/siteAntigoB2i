import styled, { css } from "styled-components";

interface NavbarItemsProps {
    isToggle: boolean;
}

export const NavbarItems = styled.div<NavbarItemsProps>`

    ${props =>
        props.isToggle ?
            css`
        display:none;
        transition:display 1.2s;
    `:
            css`
        display:flex;
        transition:display 1.2s;
    `
    }
    
    @media(max-width:700px){
        flex-direction:column;
        position: absolute;
        top: 84px;
        transition-duration: 1.2s;
        width: 100%;
        background: #fff;
        margin: 0 auto;
        border:none;
        left:0;
    }

    a{
        margin:0 1rem;
        font-size:1rem;

        @media(max-width:700px){
            color:var(--black);
            margin:0rem;
            padding:1.2rem;
            border-bottom:1px solid var(--input-bg);
            
        }

        
    }

    div{ 

        @media(max-width:700px){
            border-bottom:1px solid var(--input-bg);
            padding:1rem;
        }
        
        &:hover{
            div{
                display:flex;
            }
            
        }
    }
       
    

    
`;

export const DropdownContent = styled.div`
    position:absolute;
    display:none;
    flex-direction:column;
    background:var(--background);
    z-index:9;
    transition: display 0.2s;

    @media(max-width:700px){
        width:100%;
        left:0;
    }   
    
    a{
        border-bottom:1px solid var(--input-bg);
        color:var(--text-title);
        font-size:0.8rem;
        padding:0.5rem 1rem;
        margin:0;

        @media(max-width:700px){
        
            padding:1.2rem;
            font-size:1rem;
            
        }   
    

        & + a{
            
            
        }
    }


    
`;