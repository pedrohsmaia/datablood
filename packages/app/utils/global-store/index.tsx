import { create } from 'zustand'

interface GlobalStoreState {
  toggleCreateModal: boolean
  setToggleCreateModal: () => void
}

export const useGlobalStore = create<GlobalStoreState>((set) => ({
  toggleCreateModal: false,
  setToggleCreateModal: () => set((state) => ({ toggleCreateModal: !state.toggleCreateModal })),
}))
