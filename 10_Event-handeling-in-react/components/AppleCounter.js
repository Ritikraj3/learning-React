import Button from "./Button";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

// Use new URL() for images
const LeftArrow = new URL("../assets/images/left.png", import.meta.url).href;
const RightArrow = new URL("../assets/images/right.png", import.meta.url).href;

const totalApplesCount = 100;
let rightAppleCount = 0;
let leftAppleCount = totalApplesCount - rightAppleCount;

const AppleCounter = () => {
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      leftAppleCount++;
      rightAppleCount--;
      root.render(<AppleCounter />)
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      rightAppleCount++;
      leftAppleCount--;
      
      root.render(<AppleCounter />)
    }
  };
  

  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          title="send-left"
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          title="send-right"
        />
        <AppleBasket appleCount={rightAppleCount} basketName="basket 2" />
      </section>
      {/* <p>
        <button
          onClick={() => {
            root.render(<AppleCounter />);
          }}
        >
          re-render
        </button>
      </p> */}
    </>
  );
};

export default AppleCounter;
