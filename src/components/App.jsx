import Header from './Header';
import Calculation from './Calculation';
import Calculator from './Calculator';
import './App.scss';

import { useStateContext } from '../contexts/StateContext';

export default function App() {
  const { theme } = useStateContext();

  return (
    <div className={`wrapper ${theme}-colors`}>
      <div className='app'>
        <Header />
        <main>
          <Calculation />
          <Calculator />
        </main>
      </div>
    </div>
  );
}