import Section from "@/components/Section";
const model = {
  id: "1",
  title: "Model S",
  className: "h-12 text-center px-6 mt-[164.4px] w-full",
  secondText: "Plaid",
  buttons: [
    { title: "Order Now", className: "bg-transparent border-2 border-white text-white w-[235px]" },
    {
      title: "Demo Drive",
      className: "bg-[#222222] text-white w-[235px]",
    },
  ],
  bgImage:
    "https://tesla-cdn.thron.com/delivery/public/image/tesla/9ed31f26-4d49-4701-bc5b-2121ff85e5b3/bvlatuR/std/2880x1800/Model-S-Main-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto",
};

const models = () => {
  return (
    <div>
      <Section
        key={model.id}
        title={model.title}
        className={model.className}
        bgImage={model.bgImage}
        secondText={model.secondText}
        underline={model.underLine}
        buttons={model.buttons}
      />
    </div>
  );
};

export default models;
