import { create } from 'zustand'

export const useStore = create((set) => ({
  isEn: false,
  setIsEn: () => set((state) => ({ isEn: !state.isEn })),
}))