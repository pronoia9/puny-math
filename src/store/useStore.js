import { create } from 'zustand';
import { deleteLast, isValidInput, isValidNumber, isValidOperator,add, subtract, multiply, divide, calculatePls } from '../utils/utils';

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
    set((state) => {
      let newState = {};
      if (state.input && isValidOperator(operator)) {
        // if theres no prev calculations, just put the input there
        if (!state.calculations) newState = { calculations: state.input };
        // do calculation and update the state.calculations with the calculated value
        else newState = { calculations: calculatePls(state.operator, state.calculations, state.input) };
        // reset the input, update the operator, and add whichever calculations we got
        newState = { input: '', operator, ...newState };
      }
      return { ...newState };
    }),

  doCalculation: () =>
    set(({ input, calculations, operator }) => {
      console.log('DO CALCULATION function!');
      if (!input || !calculations || !operator) console.log('cant do any calculations');
      else {

      }
      return { input: `${input}` };
    }),

  reset: () => set({ input: '', calculations: '', operator: '' }),
}));
