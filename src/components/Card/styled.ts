import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #1e293b;
  margin: auto;
  width: 100%;
  height: 190px;
  border-radius: 5px;
  justify-content: space-between;
  padding: 20px;
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1rem;
  }
`

export const CardTitle = styled.div`
  display: flex;
  
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
  }
`

export const CardTitleName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardText = styled.p`
  margin-top: 10px;
  font-size: 1.3rem;
  
`

export const CardLink = styled.div`
  width: 100%;
  a {
    text-decoration: none;
    padding: 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.secondary};
    transition: 0.3s;
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 150px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
