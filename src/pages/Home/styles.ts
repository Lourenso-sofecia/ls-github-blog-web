import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    justify-content: space-between;

    margin: 4.5rem 0 0.8rem 0;

    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};

    
    p{
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
        line-height: 160%;
    
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 416px 1fr;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 2rem;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    border: none;
    
`;