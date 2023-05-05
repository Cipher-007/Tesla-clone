const Button = ({ title, className }) => {
  return (
    <div className='flex text-center mb-0 gap-8 font-GothamSSm_Medium'>
      <a
        className={`h-10 py-2 px-6 rounded-md text-sm border-2 border-transparent ${className}`} //235px
      >
        {title}
      </a>
    </div>
  );
};

export default Button;
