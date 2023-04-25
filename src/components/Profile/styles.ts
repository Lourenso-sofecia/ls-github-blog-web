import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 2rem; 
    margin-top: -5rem;
    background: ${props => props.theme["base-profile"]};
    box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const Avatar = styled.div`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    margin-right: 2rem;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: ${props => props.theme["base-title"]};
        padding-bottom: 0.5rem;
    }
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
export const ContentText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${props => props.theme["base-text"]};
    padding-bottom: 1.6rem;

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