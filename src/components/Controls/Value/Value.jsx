import CountTotalFeedback from "../../utils/countTotalFeedback/CountTotalFeedback";
import PositivePercentage from "../../utils/PositivePercentage/PositivePercentage";
const Value = ({ value }) => {
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
        <span>
          <CountTotalFeedback value={value} />
        </span>
      </li>
      <li>
        Positive feedback:
        <span>
          <PositivePercentage valueGoog={value} />%
        </span>
      </li>
    </>
  );
};

export default Value;
