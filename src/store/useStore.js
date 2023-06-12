import { create } from 'zustand';
import { deleteLast, isValidInput, isValidNumber, isValidOperator,add, subtract, multiply, divide, calculatePls } from '../utils/utils';

export const useStore = create((set) => ({
  theme: 'dark',
  setTheme: (newTheme) => set({ theme: newTheme }),

  input: '0',
  setInput: (newInput) => set({ input: newInput }),
  addInput: (newInput) =>
    set(({ input }) => {
      let newState = { input: '' };
      if (isValidNumber(newInput)) newState.input = `${parseFloat(`${input}${newInput}`)}`;
      else if (isValidInput(newInput) && !input.includes('.')) {
        if (!input) newState.input = '0.';
        else newState.input = input + '.';
      }
      return { ...newState };
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
        if (!state.calculations) newState = { calculations: state.input }; // if theres no prev calculations, just put the input there
        else newState = { calculations: calculatePls(state.operator, state.calculations, state.input) }; // do calculation and update the state.calculations with the calculated value
        newState = { input: '', operator, ...newState }; // reset the input, update the operator, and add whichever calculations we got
      }
      return { ...newState };
    }),

  doCalculation: () =>
    set(({ input, calculations, operator }) => {
      let newState = {};
      if (!input || !calculations || !operator) console.log('cant do any calculations');
      else newState = { input: calculatePls(operator, calculations, input), calculations: '', operator: '' };
      return { ...newState };
    }),

  reset: () => set({ input: '0', calculations: '', operator: '' }),
}));
