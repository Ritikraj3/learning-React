import { createRoot } from 'react-dom/client'
import "./style.css"

const h1 = <h1>Hello WOrld</h1>


function cards(key, title, image, company, rate) {
    return (<div className='card' key={key}>
        <img src={image} alt="card" />
        <h3>{title}</h3>
        <p>{company}</p>
        <p><b>₹ {rate}</b></p>
    </div>)
}



const root = createRoot(document.getElementById('root'))


console.log("Hello World!");


fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        const container2 = data.products.map((product) => {
            return cards(product.id, product.title, product.thumbnail, product.brand, product.price)
        })
        root.render(<div className='container'>{container2}</div>)

    })