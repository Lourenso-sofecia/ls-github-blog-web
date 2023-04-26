import styled from "styled-components";

export const CardContainer = styled.header`
    //color: ${props => props.theme["base-subtitle"]};
    background: ${props => props.theme["base-post"]};

    border-radius: 10px;
    padding: 2rem;
    
    span {
        padding-left: 1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 8.875px;
        line-height: 160%;
        color: ${props => props.theme["base-span"]};
        display: flex;
    }
    border: 2px solid transparent;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    &:hover{
        border: 2px solid ${props => props.theme["base-span"]};

    }

`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.2rem;
    h3 {
    }
    span {
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 160%;
        color: ${props => props.theme["base-span"]};
        

        white-space:nowrap;
    }

`;