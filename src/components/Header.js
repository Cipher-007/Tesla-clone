import { useState } from "react";
import Menu from "./NavBar/Menu";
import BackDrop from "./BackDrop";
import { useRouter } from "next/router";
import MidNav from "./NavBar//MidNav";
import RightNav from "./NavBar//RightNav";
import LeftNav from "./NavBar/LeftNav";

const black = ["/", "/models", "/modelx", "/solarpanels"];

const Header = ({}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  const { pathname } = useRouter();
  const Color = black.includes(pathname) ? "black" : "white";

  return (
    <div className='absolute top-[52px] w-screen'>
      <header
        className={`flex h-14 flex-row font-GothamSSm_Medium text-sm font-medium text-${Color}`}
      >
        <LeftNav />
        <MidNav />
        <RightNav menuHandler={menuHandler} />
        {showMenu && <Menu onClose={menuHandler} />}
        {showMenu && <BackDrop onClose={menuHandler} />}
      </header>
    </div>
  );
};

export default Header;
