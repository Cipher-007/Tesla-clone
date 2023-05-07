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
  title: "Model Y",
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
    "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-Y-Main-Hero-Desktop-Global",
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
