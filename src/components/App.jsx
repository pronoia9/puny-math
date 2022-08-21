import Header from './Header';
import Results from './Results';
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
          <Results />
          <Calculator />
        </main>
      </div>
    </div>
  );
}