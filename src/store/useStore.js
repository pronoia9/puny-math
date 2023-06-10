import { create } from 'zustand';
import { deleteLast } from '../utils/utils';

export const useStore = create((set) => ({
  theme: 'dark',
  setTheme: (newTheme) => set({ theme: newTheme }),

  input: '',
  setInput: (newInput) => set({ input: newInput }),
  addInput: (newInput) =>
    set((state) => {
      return { input: `${state.input}${newInput}` };
    }),
  removeInput: () =>
    set((state) => {
      return { input: `${deleteLast(state.input)}` };
    }),
  resetInput: () => set({ input: '' }),

  calculations: '',
  resetCalculations: () => set({ calculations: '' }),

  reset: () => set({ input: '', calculations: '' }),
}));
