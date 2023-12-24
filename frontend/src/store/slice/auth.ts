import { StateCreator } from 'zustand'

import { IUser } from '@/shared/interfaces/entities/user'
import { ILoginResponse } from '@/shared/interfaces/reponse'

export interface AuthSlice {
  user: IUser | null
  token: string
  setUser: (payload: ILoginResponse) => void
  removeUser: () => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  user: null,
  token: '',
  // TODO: ADD USER HERE
  setUser: ({ data: { token } }) => set({ token }),
  removeUser: () => set({ user: null })
})
