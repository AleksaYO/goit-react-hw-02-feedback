import css from './Statistics.module.css';

export function Statistics({
  state,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) {
  return (
    <>
      <ul>
        <li className={css.item}>Good: {state.good}</li>
        <li className={css.item}>Neutral: {state.neutral}</li>
        <li className={css.item}>Bad: {state.bad}</li>
        <li className={css.item}>Total: {countTotalFeedback()}</li>
        <li className={css.item}>
          Positive feedback: {countPositiveFeedbackPercentage()}%
        </li>
      </ul>
    </>
  );
}
