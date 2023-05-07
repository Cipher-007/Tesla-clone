const firstClassName = {
  bg: "transparent",
  text: "white",
  width: "235px",
  borderColor: "rgb(255 255 255)",
};

const secondClassName = {
  bg: "#222222",
  text: "white",
  width: "235px",
  borderColor: "transparent",
};

import Section from "@/components/Section";

const model = {
  id: "1",
  title: "Model 3",
  className: "h-12 text-center px-6 mt-[164.4px] w-full",
  secondText: "Schedule a Demo Drive",
  underLine: true,
  buttons: [
    {
      title: "Order Now",
      style: firstClassName,
    },
    { title: "View Inventory", style: secondClassName },
  ],
  bgImage:
    "https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD",
};

const model3 = () => {
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

export default model3;
