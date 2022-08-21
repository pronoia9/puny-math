export default function Button({ button, style }) {
  return <button className={`btn${style}`}>{button}</button>;
}