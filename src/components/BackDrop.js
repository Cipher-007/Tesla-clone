const BackDrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className='fixed z-40 backdrop-blur-sm top-0 bottom-0 right-0 left-0 bg-[#0000004D]'
    ></div>
  );
};

export default BackDrop;
