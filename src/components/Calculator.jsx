import Button from './Button';

import { useStateContext } from '../contexts/StateContext';

export default function Calculator() {
  const { buttons } = useStateContext();
  return (
    <div className='grid border-radius dark-colors'>
      {buttons.map((btn) => (
        <Button key={btn.key} {...btn} />
      ))}
    </div>
  );
}