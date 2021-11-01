const PositivePercentage = ({ good, total }) => {
  const posutiveFeedbaks = Math.round((good / total) * 100 || 0);
  return posutiveFeedbaks;
};
PositivePercentage({ good: 2, total: 4 });
export default PositivePercentage;
