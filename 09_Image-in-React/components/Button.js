const Button = ({ imageUrl , title }) => {
  return (
    <button title= {title}>
      <img src={imageUrl} alt="button" width="50" height="50" />
    </button>
  );
};

export default Button;
