import Arrow from "./Arrow";
import Button from "./Button";

const Body = ({ buttons, showArrow }) => {
  return (
    <div className='relative top-6 flex w-full basis-[69%] flex-col place-items-center justify-end px-6 pb-6'>
      <div className='mb-4 basis-[72px] py-4'>
        <section className='grid grid-cols-2 gap-6'>
          {buttons.map((e) => (
            <Button key={e.id} title={e.title} style={e.style} />
          ))}
        </section>
      </div>
      {showArrow && <Arrow />}
    </div>
  );
};

export default Body;
