import './Button.scss';

export default function Button({ button, type, style, click }) {
  return <button className={`btn${style}`} onClick={() => click(button)}>{button}</button>;
}