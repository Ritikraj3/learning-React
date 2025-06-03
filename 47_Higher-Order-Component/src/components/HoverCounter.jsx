import { Component } from "react";
import withCounter from "./WithCounter";

class HoverCounter extends Component {
 
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-3xl font-bold text-center  text-blue-600 my-4">
          {name}
        </h1>
        <div className="flex items-center  justify-between max-w-md mx-auto mt-4 px-4">

          {/* <h1 onClick = {() => this.setState({ count: count + 1 })} className="text-2xl select-none font-semibold cursor-pointer bg-green-500 hover:bg-green-600 py-1 px-4 text-white rounded"> Count: {count} </h1> */}

          <button
            onMouseEnter={this.props.increaseCount}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded"
          >
            Count: {this.props.count}
          </button>
        </div>
      </>
    );
  }
}

export default withCounter(HoverCounter);
