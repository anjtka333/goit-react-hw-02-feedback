const PositivePercentage = ({ valueGoog }) => {
  const { good, neutral, bad } = valueGoog;
  const posutiveFeedbaks = Math.round(
    (good / (good + neutral + bad)) * 100 || 0
  );
  return posutiveFeedbaks;
};
export default PositivePercentage;
