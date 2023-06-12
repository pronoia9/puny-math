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

  operator: '',
  setOperator: (newOperator) => set({ operator: newOperator }),
  resetOperator: () => set({ operator: '' }),

  doOperation: (operator) =>
    set(({ input }) => {
      console.log('DO OPERATION function!');
      return { input: `${input}` };
    }),

  doCalculation: () =>
    set(({ input, calculations, operator }) => {
      console.log('DO CALCULATION function!');
      if (!input || !calculations || !operator) console.log('cant do anything');
      else {
      }
      return { input: `${input}` };
    }),

  reset: () => set({ input: '', calculations: '', operator: '' }),
}));
