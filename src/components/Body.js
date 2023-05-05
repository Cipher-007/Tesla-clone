import Arrow from "./Arrow";
import Button from "./Button";

const Body = ({ buttons, showArrow }) => {
  return (
    <div className='basis-[69%] flex flex-col w-full px-6 pb-6 top-6 relative justify-end place-items-center'>
      <div className='basis-[72px] py-4 mb-4'>
        <section className='grid grid-cols-2 gap-6'>
          {buttons.map((e) => (
            <Button key={e.title} title={e.title} className={e.className} />
          ))}
        </section>
      </div>
      {showArrow && <Arrow />}
    </div>
  );
};

export default Body;
