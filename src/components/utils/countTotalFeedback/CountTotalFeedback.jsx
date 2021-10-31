const CountTotalFeedback = ({ value }) => {
  const { good, neutral, bad } = value;
  const total = good + neutral + bad;
  return total;
};

export default CountTotalFeedback;
