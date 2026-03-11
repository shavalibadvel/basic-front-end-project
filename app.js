import React from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.countAdd = this.countAdd.bind(this);
    // this.countSub = this.countSub.bind(this);
    // this is not needed when we we use arrow functions fuighjkndigyubhjknmsdvluy
  }
  countAdd = () => {
    this.setState((curState, propState) => {
      return { count: curState.count + propState.diff };
    });
  };
  countSub = () => {
    this.setState((curState, propState) => {
      return { count: curState.count - propState.diff };
    });
  };
  render() {
    return (
      <>
        <h1>Hello. from Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.countAdd}>+{this.props.diff}</button>{" "}
        <span></span>
        <button onClick={this.countSub}>-{this.props.diff}</button>
      </>
    );
  }
}
class App extends React.Component {
  render() {
    return <Counter diff={5} />;
  }
}

root.render(<App />);
