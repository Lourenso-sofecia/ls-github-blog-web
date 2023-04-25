import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  padding: 2.5rem 2rem 2.5rem 2rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
`;

export const Text = styled.p`
    margin-bottom: 1rem;
`;
export const TextLink = styled(NavLink)`
  color: ${props => props.theme.blue};
    
`;

export const Footer = styled.footer`
  color: ${props => props.theme.blue};
  background: ${props => props.theme["base-post"]};

  padding: 1rem;
`;