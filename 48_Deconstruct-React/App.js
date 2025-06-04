import { render } from "./react-dom.js";
import React from "./react.js";
import './App.css'


function Cards({ title, image, brand, price }) {
  return (
    <div className="card">
      <img src={image} alt="card" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>₹ {price}</b>
        </p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    render(
      <div className="container">
        {data.products.map((product) => {
          return ( 
            <Cards
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          );
        })}
      </div>,
      document.getElementById("root")
    );
  });

// render(<Card />, document.getElementById("root"));
