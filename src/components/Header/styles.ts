import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["base-profile"]};
  padding: 4rem 0 1.375rem 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  //max-width: 1440px;
  //margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Logo = styled.div`

`;