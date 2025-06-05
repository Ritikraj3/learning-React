import AppleCounter from "./components/AppleCounter";
import { Counter } from "./components/Counter";

const App = () => {

    return (<div>
        <Counter/>
        <AppleCounter/>
    </div>
    )
}

const h1_virtual = <h1>This is a virtual h1 tag</h1>

const h1_real = document.createElement('h1')
h1_real.innerText = 'This is a real h1 tag'

console.log(h1_virtual)
console.log(h1_real)

export default App 