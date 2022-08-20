import styled from 'styled-components'

export const MainContainer = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 60px;
  

  @media (max-width: 1052px) {
    flex-direction: column;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 35%;
  padding-top: 30px;
  overflow: auto; 

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  

  h3 {
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
  }

  @media (max-width: 1200px) {
    width: 100%;
    min-height: auto;
  }
`

export const LeftDiv = styled.div`
  max-height: 100vh;
  overflow: auto;
  height: 100%;
  display: flex;
  width: 35%;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  padding-top: 20px;
  background-color: #1e293b;

  @media (max-width: 1052px) {
    position: relative;
    width: 100%;
  }

`

export const UserGithub = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 10px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
  }
`

export const ProfileUser = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 40px;
`

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;

  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin-top: 4px;

  h2 {
    font-size: 2rem;
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.1rem;
    margin-top: 10px;
  }
`

interface IBorderProps {
  borderColor?: string
}
export const Form = styled.div<IBorderProps>`
  border: 3px solid ${(props) => props.borderColor};
  width: 95%;
  margin: 0 auto;
  height: 60px;
  margin-top: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
`

export const FormDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 8px;
  border: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-height: 100%;
  border-radius: 8px;
  
  
 @media (max-width: 1200px) {
    width: 100%;
    min-height: auto;
    height: auto;

  }

 
`

export const LeftFilter = styled.div`
  p {
    margin-top: 5px;
  }
`

export const GridDiv = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
