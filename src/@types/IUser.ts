
export interface IUser {
  id: number
  name: string
  login: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  location: string
}



export interface IRepository {
  id: number
  name: string
  description: string
  language: string
  html_url: string
}
