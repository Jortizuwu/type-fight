import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'

import {
  AuthSlice,
  ThemeSlice,
  ModalSlice,
  createAuthSlice,
  createThemeSlice,
  createModalSlice
} from './slice'

const usePersistedStore = create<AuthSlice & ThemeSlice & ModalSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createThemeSlice(...a),
        ...createModalSlice(...a)
      }),
      {
        name: 'bound-persisted-store',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)

export default usePersistedStore
