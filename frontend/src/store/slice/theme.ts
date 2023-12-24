import { theme } from '@/shared/utils'
import { StateCreator } from 'zustand'

type Theme = {
  name: string
  background: {
    primary: string
    secondary: string
  }
  text: {
    primary: string
    secondary: string
    title: string
  }
}
export interface ThemeSlice {
  theme: Theme
  setTheme: (theme: string) => void
}

export const createThemeSlice: StateCreator<ThemeSlice, [], [], ThemeSlice> = (
  set
) => ({
  theme: theme[0],

  setTheme: (name) =>
    set(() => {
      const newTheme = theme.find((val) => val.name === name)
      return {
        theme: newTheme
        // themeName: newTheme?.name || 'Aurora'
      }
    })
})
