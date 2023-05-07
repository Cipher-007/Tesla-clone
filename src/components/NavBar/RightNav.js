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

const RightNav = ({ menuHandler }) => {
  return (
    <ol className='flex grow flex-row place-content-end items-center pr-8 text-center'>
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
        className='grid h-8 content-center hover:rounded-md hover:bg-opacity-70 hover:backdrop-blur-3xl hover:backdrop-brightness-90'
        onClick={menuHandler}
      >
        <a className='w-[71.91px] pl-2 pr-2'>
          <span>Menu</span>
        </a>
      </li>
    </ol>
  );
};

export default RightNav;
