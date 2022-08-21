export default function Button({ key }) {
  return <button className={`btn${key.style}`}>{key.key}</button>;
}