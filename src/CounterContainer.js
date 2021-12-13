import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});
const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
    <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    <button onClick={() => dispatch({ type: "INCREMENT10" })}>+10</button>
    <button onClick={() => dispatch({ type: "DECREMENT10" })}>-10</button>
    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
  </div>
);

export default connect(mapStateToProps)(CounterComponent);
