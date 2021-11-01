const Value = ({ value, total, positivePercentage }) => {
  const { good, bad, neutral } = value;
  return (
    <>
      <li>
        Good<span> {good}</span>
      </li>
      <li>
        Neutral<span> {neutral}</span>
      </li>
      <li>
        Bad<span> {bad}</span>
      </li>
      <li>
        Total
        <span>{total}</span>
      </li>
      <li>
        Positive feedback:
        <span>{positivePercentage}%</span>
      </li>
    </>
  );
};

export default Value;
