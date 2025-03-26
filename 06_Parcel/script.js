import {createRoot} from 'react-dom/client'

const h1 = <h1>Hello Ritik</h1>

const root = createRoot(document.getElementById ('root'))

root.render(h1)

console.log("Hello World!");

// if (module.hot) {
//     module.hot.accept()
// }