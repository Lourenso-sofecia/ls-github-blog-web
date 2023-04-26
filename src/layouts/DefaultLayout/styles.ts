import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    background: ${props => props.theme["base-background"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`;

export const MainContainer = styled.main`
  width: 54rem;
  margin: 0 auto;
  border-radius: 10px;
  
`;
