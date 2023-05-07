const BackDrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className='fixed bottom-0 left-0 right-0 top-0 z-40 bg-[#0000004D] backdrop-blur-sm'
    ></div>
  );
};

export default BackDrop;
