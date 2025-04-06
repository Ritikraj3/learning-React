import Button from "./Button";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { useState , Fragment } from "react";

console.log(Fragment);
// Use new URL() for images
const LeftArrow = new URL("../assets/images/left.png", import.meta.url).href;
const RightArrow = new URL("../assets/images/right.png", import.meta.url).href;

// let rightAppleCount = 0;
// let leftAppleCount = totalApplesCount - rightAppleCount;

const AppleCounter = () => {
  const totalApplesCount = 100;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalApplesCount - rightAppleCount
  );
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };

  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left-arrow"
        > Left Arrow </Button>
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right-arrow"
        > Right Arrow </Button>
        <AppleBasket appleCount={rightAppleCount} basketName="basket 2" />
      </section>
    </>
  );
};

export default AppleCounter;
