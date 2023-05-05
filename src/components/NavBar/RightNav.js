import List from "../Header/List";

const Util = [
  {
    id: "1",
    title: "Shop",
    link: "/shop",
    liclassName:
      "h-8 grid content-center hover:rounded-md hover:bg-opacity-70 hover:backdrop-blur-3xl hover:backdrop-brightness-90",
    linkclassName: "pl-2 pr-2 w-[70.11px]",
  },
  {
    id: "2",
    title: "Account",
    link: "/account",
    liclassName:
      "h-8 grid content-center hover:rounded-md hover:bg-opacity-70 hover:backdrop-blur-3xl hover:backdrop-brightness-90",
    linkclassName: "pl-2 pr-2 w-[93.66px]",
  },
];

const RightNav = ({menuHandler}) => {
  return (
    <ol className='grow flex flex-row items-center place-content-end pr-8 text-center'>
      {Util.map((u) => (
        <List
          key={u.id}
          title={u.title}
          link1={u.link}
          liclassName={u.liclassName}
          linkclassName={u.linkclassName}
        />
      ))}
      <li
        className='h-8 grid content-center hover:rounded-md hover:bg-opacity-70 hover:backdrop-blur-3xl hover:backdrop-brightness-90'
        onClick={menuHandler}
      >
        <a className='pl-2 pr-2 w-[71.91px]'>
          <span>Menu</span>
        </a>
      </li>
    </ol>
  );
};

export default RightNav;
