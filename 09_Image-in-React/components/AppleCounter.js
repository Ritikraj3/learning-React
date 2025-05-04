import Button from "./Button";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

// Use new URL() for images
const LeftArrow = new URL("../assets/images/left.png", import.meta.url).href;
const RightArrow = new URL("../assets/images/right.png", import.meta.url).href;

const AppleCounter = () => {
  return (
    <section>
      <AppleBasket appleCount={10} basketName={1} />
      <Button imageUrl={LeftArrow} title="send-left" />
      <Button imageUrl={RightArrow} title= "send-right" />
      <AppleBasket appleCount={0} basketName={2} />
    </section>
  );
};

export default AppleCounter;
