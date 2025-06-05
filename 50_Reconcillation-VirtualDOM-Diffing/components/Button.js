const Button = ({ imageUrl , title , clickHandler }) => {
  return (
    <button title= {title} onClick={clickHandler} >
      <img src={imageUrl} alt="button"/>
    </button>
  );
};

export default Button;
