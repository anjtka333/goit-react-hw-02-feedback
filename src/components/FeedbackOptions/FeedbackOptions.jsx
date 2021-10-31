const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonName = Object.entries(options).map((item, id) => (
    <button key={id} onClick={onLeaveFeedback} name={item[0]}>
      {item[0]}
    </button>
  ));
  return buttonName;
};

export default FeedbackOptions;
