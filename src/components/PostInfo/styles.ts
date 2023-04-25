import styled from "styled-components";

export const PostInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 2rem; 
    margin-top: -6rem;
    background: ${props => props.theme["base-profile"]};
    box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const Header = styled.header`
    width: 100vh;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    span{
        padding-bottom: 1.25rem;
        img {
            
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            &:hover{
                border-bottom: 2px solid ${props => props.theme.blue};
            }
        }
    }
`;
export const ContentText = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${props => props.theme["base-title"]};
    padding-bottom: 1.1rem;

`;
export const Footer = styled.footer`
    display: flex;
    align-items: center;
    span{
        margin-right: 1.5rem;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme["base-subtitle"]};
    }
    img {
        width: 18px;
        height: 18px;

        flex: none;
        order: 0;
        flex-grow: 0;
        margin-right: 0.5rem;
        color: ${props => props.theme["base-label"]};
    } 
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
`;