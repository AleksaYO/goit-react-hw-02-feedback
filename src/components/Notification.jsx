import css from './Statistics.module.css';
export function Notification({ message }) {
  return (
    <>
      <h3 className={css.notification}>{message}</h3>
    </>
  );
}
