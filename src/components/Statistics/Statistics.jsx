import PropTypes from "prop-types";
import s from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={s.ulStyle}>
        <li>
          Good <span> {good}</span>
        </li>
        <li>
          Neutral<span> {neutral}</span>
        </li>
        <li>
          Bad <span>{bad}</span>
        </li>
        <li>
          Total<span> {total}</span>
        </li>
        <li>
          Positive<span> {positivePercentage}</span>%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
