import './Calculator.scss';

import { useStateContext } from '../contexts/StateContext';
import Button from './Button';

export default function Calculator() {
  const { buttons } = useStateContext();
  return (
    <div className='grid border-radius dark-colors'>
      {buttons.map((btn) => (
        <Button key={btn.button} {...btn} />
      ))}
    </div>
  );
}