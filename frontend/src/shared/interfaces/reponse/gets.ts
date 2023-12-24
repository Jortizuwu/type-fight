import { IUser } from '../entities/user'

export interface IGetUserResponse {
  data: IUser
  isArray: boolean
  path: string
  duration: string
  method: string
}
