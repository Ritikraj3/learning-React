const Button = ({ imageUrl , children , clickHandler }) => {
  return (
    <button title= {children} onClick={clickHandler} >
      {children}
      <img src={imageUrl} alt={children}/>
    </button>
  );
};

export default Button; 
