import List from "../Header/List";

const liclassName =
  "hover:rounded-md hover:bg-opacity-70 hover:backdrop-blur-3xl hover:backdrop-brightness-90";
const linkclassName = "px-2 py-1 flex w-max";

const Links = [
  {
    id: "1",
    title: "Model S",
    link: "/models",
    liclassName,
    linkclassName,
  },
  {
    id: "2",
    title: "Model 3",
    link: "/model3",
    liclassName,
    linkclassName,
  },
  {
    id: "3",
    title: "Model X",
    link: "/modelx",
    liclassName,
    linkclassName,
  },
  {
    id: "4",
    title: "Model Y",
    link: "/modely",
    liclassName,
    linkclassName,
  },
  {
    id: "5",
    title: "Solar Roof",
    link: "/solarroof",
    liclassName,
    linkclassName,
  },
  {
    id: "6",
    title: "Solar Panels",
    link: "/solarpanels",
    liclassName,
    linkclassName,
  },
  {
    id: "7",
    title: "Powerwall",
    link: "/powerwall",
    liclassName,
    linkclassName,
  },
];

const MidNav = () => {
  return (
    <ol className='flex basis-[723px] flex-row items-center px-2'>
      {Links.map((model) => (
        <List
          key={model.id}
          title={model.title}
          link1={model.link}
          liclassName={model.liclassName}
          linkclassName={model.linkclassName}
        />
      ))}
    </ol>
  );
};

export default MidNav;
