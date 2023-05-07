const Button = ({ title, style }) => {
  const btclass =
    "h-10 rounded-md border-2 border-transparent px-6 py-2 text-sm";
  return (
    <div className='mb-0 flex gap-8 text-center font-GothamSSm_Medium'>
      <a
        style={{
          backgroundColor: `${style.bg}`,
          color: `${style.text}`,
          width: `${style.width}`,
          borderColor: `${style.borderColor}`,
        }}
        className={btclass} //235px
      >
        {title}
      </a>
    </div>
  );
};

export default Button;
