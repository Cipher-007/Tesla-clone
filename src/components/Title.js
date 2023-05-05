import { useRouter } from "next/router";

const black = ["/", "/models", "/modelx", "/solarpanels"];

const Title = ({ title, secondText, underline }) => {
  const { pathname } = useRouter();
  const Color = black.includes(pathname) ? "black" : "white";
  return (
    <>
      <div
        className={`basis-[194px] grid items-end h-12 text-center px-6 w-full text-${Color}`}
      >
        <h1 className='relative text-[40px] font-medium'>{title}</h1>
      </div>
      <p
        className={`${
          underline
            ? "underline underline-offset-[3px] text-sm font-medium font-GothamSSm_Book"
            : null
        } basis-12 text-${Color}`}
      >
        {secondText}
      </p>
    </>
  );
};

export default Title;
