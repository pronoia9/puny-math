import './App.scss';

import { useStateContext } from './contexts/StateContext';
import Header from './components/Header';
import Results from './components/Results';
import Calculator from './components/Calculator';

export default function App() {
  const { theme, addInput, calculate, del, getResult } = useStateContext();

  window.addEventListener('keydown', (event) => {
    const operators = ['+', '-', 'x', '*', '/'], key = event.key;
    console.log(key);
    if (key >= 0 && key <= 9) addInput(key);
    else if (operators.includes(key)) calculate(key);
    else if (key === 'Backspace' || key === 'Delete') del();
    else if (key === '=' || key === 'Enter') getResult();
  })

  return (
    <div className={`wrapper ${theme}-colors`}>
      <div className='app'>
        <Header />
        <main>
          <Results />
          <Calculator />
        </main>
      </div>
    </div>
  );
}