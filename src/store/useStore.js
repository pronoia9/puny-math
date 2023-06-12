import { create } from 'zustand';
import { deleteLast } from '../utils/utils';

export const useStore = create((set) => ({
  theme: 'dark',
  setTheme: (newTheme) => set({ theme: newTheme }),

  input: '',
  setInput: (newInput) => set({ input: newInput }),
  addInput: (newInput) =>
    set(({ input }) => {
      let append = '';
      if (!isNaN(parseFloat(newInput))) append = newInput;
      else if (newInput === '.' && !input.includes('.')) {
        if (!input) append = '0.';
        else append = newInput;
      }
      return { input: `${input}${append}` };
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
