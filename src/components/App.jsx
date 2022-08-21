import Header from './Header';
import './App.scss';

import { useStateContext } from '../contexts/StateContext';

export default function App() {
  const { theme } = useStateContext();

  return (
    <div className={`wrapper ${theme}-colors`}>
      <div className='app'>
        <Header />
      </div>
    </div>
  );
}