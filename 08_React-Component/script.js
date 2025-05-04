import { createRoot } from "react-dom/client";
import "./style.css";
import React from "react";

const h1 = <h1>Hello WOrld</h1>;

function Cards(props) {
  const { title, image, brand, price } = props;
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

const root = createRoot(document.getElementById("root"));

console.log("Hello World!");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
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
      </div>
    );
  });

//*************************************************************************************** */

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: cards,
//   ref: null,
//   props: {
//     title: "iPhone 14",
//     image:
//       "https://images.unsplash.com/photo-1695048133021-be2def43f3b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     brand: 'Apple',
//     price: 80999,
//     key: 1,
//   },
// });

// ************************************************************************************************************************************\

// console.log(React.createElement(Cards, {
//   title: "iPhone 14",
//   image:
//     "https://images.unsplash.com/photo-1695048133021-be2def43f3b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   brand: "Apple",
//   price: 80999,
//   key: 1,
// }));

// root.render(
//   React.createElement(Cards, {
//     title: "iPhone 14",
//     image:
//       "https://images.unsplash.com/photo-1695048133021-be2def43f3b2",
//     brand: "Apple",
//     price: 80999,
//     key: 1,
//   })
// );

//******************************************************************************************************

// root.render(
//   <Cards
//     title="iphone 15"
//     image=" https://images.unsplash.com/photo-1695048133021-be2def43f3b2 "
//     brand="Apple"
//     price="80999"
//   />
// );
