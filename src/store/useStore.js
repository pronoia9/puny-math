import { create } from 'zustand';
import { deleteLast, isValidInput, isValidNumber, isValidOperator } from '../utils/utils';

export const useStore = create((set) => ({
  theme: 'dark',
  setTheme: (newTheme) => set({ theme: newTheme }),

  input: '',
  setInput: (newInput) => set({ input: newInput }),
  addInput: (newInput) =>
    set(({ input }) => {
      let append = '';
      if (isValidNumber(newInput)) append = newInput;
      else if (isValidInput(newInput) && !input.includes('.')) {
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
    set(({ input, operator }) => {
      let newState = {};
      isValidOperator(operator) && console.log('VALID OPERATOR');
      if (input && isValidOperator(operator)) newState = { calculations: input, input: '', operator };
      return { ...newState };
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
