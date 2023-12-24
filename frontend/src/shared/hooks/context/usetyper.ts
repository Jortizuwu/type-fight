import { TyperContext } from '@/shared/components/typer/context'
import { useContext } from 'react'

export const useTyperContext = () => {
  const context = useContext(TyperContext)
  if (!context) {
    throw new Error('Error in creating the context')
  }
  return context
}
