import { Component } from "react";

class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <ul>
          <li>
            Good<span> {this.state.good}</span>
          </li>
          <li>
            Neutral<span></span>
          </li>
          <li>
            Bad<span></span>
          </li>
        </ul>
      </>
    );
  }
}
export default Feedbacks;
