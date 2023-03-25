import css from './Buttons.module.css';

export function Buttons({ state, onClick }) {
  return (
    <>
      <ul className={css.list}>
        <li>
          <button onClick={onClick}>Good</button>
        </li>
        <li>
          <button onClick={onClick}>Neutral</button>
        </li>
        <li>
          <button onClick={onClick}>Bad</button>
        </li>
      </ul>
    </>
  );
}
