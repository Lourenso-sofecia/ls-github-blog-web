import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};
    padding: 1rem;
    border: 1px solid ${props => props.theme["base-border"]};

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    &::placeholder {
      //color: ${props => props.theme["base-text"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${props => props.theme["green-300"]};
    color: ${props => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme["white"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`