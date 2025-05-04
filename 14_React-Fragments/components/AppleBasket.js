const AppleBasket = ({appleCount , basketName}) => {
  return (
    <div>
        <h1>
        <span> {appleCount} </span> Apples
        </h1>
        <p> {basketName} </p>
    </div>
  )
}

export default AppleBasket