import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { api } from '../../services/api'
import {
  Form,
  FormDiv,
  GridDiv,
  MainContainer,
  ContainerRight,
  UserGithub,
  Texts,
  ContainerLeft,
  ProfileInfo,
  ProfileUser,
  LeftFilter,
  LeftDiv,
} from './styled'
import { Card } from '../Card'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { GoRepo } from 'react-icons/go'
import { RiUserFollowLine } from 'react-icons/ri'
import { IUser, IRepository } from '../../@types/IUser'

export function PageMain() {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [userSearch, setUserSearch] = useState('')
  const [repos, setRepos] = useState<IRepository[]>([])
  const [focused, setFocused] = useState(false)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  function handleSubmit(e: any) {
    e.preventDefault()
  }

  function getUser() {
    if (userSearch === '') {
      return
    }

    const response = api
      .get(`${userSearch}`)
      .then((response) => {
        setUser(response.data)
        setIsLoading(false)
      })
      .catch(() => {
        alert('Usuario não encontrado')
        setIsLoading(true)
      })

    const response2 = api
      .get(`${userSearch}/repos`)
      .then((response) => {
        setRepos(response.data)
      })
      .catch(() => {
        console.log('não encontrado')
      })

    return {
      response,
      response2,
    }
  }

  const filterRepos = repos.filter((repo) => {
    return repo.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <MainContainer>
      <ContainerLeft>
        <LeftDiv>
          <h1> Qual nome do usuário deseja pesquisar?</h1>
          <Form
            borderColor={focused ? '#0e83c9' : '#fff'}
            onSubmit={handleSubmit}
          >
            <FormDiv
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            >
              <Input
                type="text"
                placeholder="Digite o nome do usuário"
                onChange={(e) => setUserSearch(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    getUser()
                  }
                }}
              />
              <Button onClick={getUser}>
                <AiOutlineSearch size={30} color="white" /> Buscar
              </Button>
            </FormDiv>
          </Form>

          <UserGithub>
            {isLoading ? (
              <h3>Nenhum usuário pesquisado.</h3>
            ) : (
              <>
                <ProfileUser>
                  <img src={user.avatar_url} alt={user.name} />
                  <Texts>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                  </Texts>
                </ProfileUser>
                <ProfileInfo>
                  <p>
                    <FiUsers /> Seguidores: {user.followers}
                  </p>
                  <p>
                    <RiUserFollowLine /> Seguindo: {user.following}
                  </p>
                  <p>
                    <GoRepo /> Repositórios: {user.public_repos}
                  </p>
                  <p>
                    <MdLocationPin /> Localização: {user.location}
                  </p>
                </ProfileInfo>
              </>
            )}
          </UserGithub>
        </LeftDiv>
      </ContainerLeft>

      <ContainerRight>
        {isLoading ? (
          <h2>Nenhum usuário pesquisado.</h2>
        ) : (
          <>
            <LeftFilter>
              <Input
                type="text"
                placeholder="Pesquisar repositório"
                onChange={handleSearch}
              />
              <p>
                {filterRepos.length === 0 ? (
                  <span>Nenhum resultado encontrado</span>
                ) : (
                  <span>{filterRepos.length} repositórios encontrados</span>
                )}
              </p>
            </LeftFilter>
            <GridDiv>
              {filterRepos
                .map((repo) => (
                  <Card
                    key={repo.id}
                    name={repo.name}
                    html_url={repo.html_url}
                    description={repo.description}
                    language={repo.language}
                  />
                ))
                .slice(0, 10)}
            </GridDiv>
          </>
        )}
      </ContainerRight>
    </MainContainer>
  )
}
