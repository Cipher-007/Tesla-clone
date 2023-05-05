import Link from "next/link";

const List = ({ title, link1, liclassName, linkclassName }) => {
  return (
    <li className={liclassName}>
      <Link className={linkclassName} href={link1}>
        <span className='mx-2'>{title}</span>
      </Link>
    </li>
  );
};

export default List;
