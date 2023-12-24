import { ReactNode } from 'react'
import { StateCreator } from 'zustand'

export interface ModalSlice {
  isModalOpen: boolean
  showModal: (component: ReactNode) => void
  closeModal: () => void
  component: ReactNode | null
}

export const createModalSlice: StateCreator<ModalSlice, [], [], ModalSlice> = (
  set
) => ({
  component: null,
  isModalOpen: false,
  showModal: (component) => set(() => ({ isModalOpen: true, component })),
  closeModal: () => set(() => ({ isModalOpen: false }))
})
