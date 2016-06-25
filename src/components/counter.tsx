import * as React from 'react';

class Counter extends React.Component<any, any> {
  private interval;

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }
  increment() {
    const currentCounter = this.state.counter;
    this.setState({
      counter: currentCounter + 1
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>Counter: { counter }</p>
      </div>
    )
  }
}

export default Counter;
