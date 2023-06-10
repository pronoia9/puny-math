import { create } from 'zustand';

export const useStore = create((set) => ({
  theme: 'dark',
  setTheme: (newTheme) => set({ theme: newTheme }),
  
  input: '',
  setInput: (newInput) => set({ input: newInput }),
}));
