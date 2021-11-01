import { Component } from "react";
import Controls from "../Controls/Controls";
import Value from "../Controls/Value/Value";
import getTotal from "../utils/helpers/countTotalFeedback";
import getPositivePercentage from "../utils/helpers/positivePercentage";
class Feedbacks extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  // static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ target }) => {
    this.setState((prevState) => {
      const { name } = target;
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = getTotal(this.state);
    const positivePercentage = getPositivePercentage({ good, total });
    return (
      <>
        <h1>Please leave feedback</h1>
        <Controls onIncrement={this.handleIncrement} />
        <ul>
          <Value
            value={{ good, bad, neutral }}
            total={total}
            positivePercentage={positivePercentage}
          />
        </ul>
      </>
    );
  }
}
export default Feedbacks;
