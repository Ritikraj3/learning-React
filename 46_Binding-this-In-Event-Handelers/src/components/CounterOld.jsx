import { Component } from "react";

class CounterOld extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.decreaseCount = this.decreaseCount.bind(this);
  }

    decreaseCount ()  {
    this.setState({ count: this.state.count - 1 });
  }

  // decreaseCount = () => {
  //   this.setState({ count: this.state.count - 1 });
  // }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <>
        <h1 className="text-3xl font-bold text-center  text-blue-600 my-4">
          {name}
        </h1>
        <div className="flex items-center justify-between max-w-md mx-auto mt-4 px-4">
          <button
            onClick={() => this.setState({ count: count + 1 })}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Increment
          </button>

          <h1 className="text-2xl px-2 font-semibold"> Count: {count} </h1>

          <button
            onClick={this.decreaseCount}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Decrement
          </button>
        </div>
      </>
    );
  }
}

export default CounterOld;
