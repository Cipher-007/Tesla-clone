import { useRouter } from "next/router";

const black = ["/", "/models", "/modelx", "/solarpanels"];

const Title = ({ title, secondText, underline }) => {
  const { pathname } = useRouter();
  const Color = black.includes(pathname) ? "black" : "white";
  return (
    <>
      <div
        className={`grid h-12 w-full basis-[194px] items-end px-6 text-center text-${Color}`}
      >
        <h1 className='relative text-[40px] font-medium'>{title}</h1>
      </div>
      <p
        className={`${
          underline
            ? "font-GothamSSm_Book text-sm font-medium underline underline-offset-[3px]"
            : null
        } basis-12 text-${Color}`}
      >
        {secondText}
      </p>
    </>
  );
};

export default Title;
