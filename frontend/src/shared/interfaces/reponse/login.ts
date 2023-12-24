export interface ILoginResponse {
  data: Data
  isArray: boolean
  path: string
  duration: string
  method: string
}

interface Data {
  code: number
  message: string
  token: string
}
