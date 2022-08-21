import Header from './Header';
import './App.scss';

import { useStateContext } from '../contexts/StateContext';
import Calculation from './Calculation';

export default function App() {
  const { theme } = useStateContext();

  return (
    <div className={`wrapper ${theme}-colors`}>
      <div className='app'>
        <Header />
        <main>
          {/* results */}
          <Calculation />

          {/* input */}
        </main>
      </div>
    </div>
  );
}