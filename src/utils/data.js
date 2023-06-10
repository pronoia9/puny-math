export const themes = ['dark', 'light', 'retro'];

export const buttons = [
  { button: 7, type: 'number', click: 'addInput' },
  { button: 8, type: 'number', click: 'addInput' },
  { button: 9, type: 'number', click: 'addInput' },
  { button: 'DEL', type: 'operator', click: 'delete' },
  { button: 4, type: 'number', click: 'addInput' },
  { button: 5, type: 'number', click: 'addInput' },
  { button: 6, type: 'number', click: 'addInput' },
  { button: '+', type: 'operator', click: 'calculate' },
  { button: 1, type: 'number', click: 'addInput' },
  { button: 2, type: 'number', click: 'addInput' },
  { button: 3, type: 'number', click: 'addInput' },
  { button: '-', type: 'operator', click: 'calculate' },
  { button: '.', type: 'operator', click: 'addDecimal' },
  { button: 0, type: 'number', click: 'addInput' },
  { button: '/', type: 'operator', click: 'calculate' },
  { button: 'x', type: 'operator', click: 'calculate' },
  { button: 'RESET', type: 'operator', click: 'reset' },
  { button: '=', type: 'operator', click: 'submit' },
];
