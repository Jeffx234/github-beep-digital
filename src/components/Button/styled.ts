import styled from 'styled-components'

export const ButtonForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 20px;
  outline: none;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.blue};
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
