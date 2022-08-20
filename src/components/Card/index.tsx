import { CardContainer, CardText, CardTitle, CardLink, CardTitleName } from './styled'
import { AiFillGithub } from 'react-icons/ai'

interface ICardProps {
  name: string
  description: string
  language: string
  html_url: string
}

export function Card ({ name, html_url, description, language }: ICardProps) {
  return (
    <CardContainer>
      <CardTitle>
        <CardTitleName>
          <h1> {name} </h1>
          <p> {language} </p>
        </CardTitleName>
        <CardText> {description}</CardText>
      </CardTitle>
      <CardLink>
        <a href={html_url} target="_blank" rel="noreferrer">
          Ver no Github <AiFillGithub size={20} />
        </a>
      </CardLink>
    </CardContainer>
  )
}
