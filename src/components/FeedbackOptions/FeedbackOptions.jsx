import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonName = Object.entries(options).map((item, id) => (
    <button
      className={s.button}
      key={id}
      onClick={onLeaveFeedback}
      name={item[0]}
    >
      {item[0]}
    </button>
  ));
  return buttonName;
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape(),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
