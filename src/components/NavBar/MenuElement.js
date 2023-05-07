const MenuElement = ({ title }) => {
  return (
    <li className='mb-2'>
      <a className='flex h-8 px-2 py-1'>
        <span className='mx-1 w-full'>{title}</span>
      </a>
    </li>
  );
};

export default MenuElement;
