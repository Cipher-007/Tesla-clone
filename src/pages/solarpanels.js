const firstClassName = {
  bg: "transparent",
  text: "white",
  width: "235px",
  borderColor: "rgb(255 255 255)",
};

import Section from "@/components/Section";

const model = {
  id: "1",
  title: "Solar for Existing Roofs",
  className: "h-12 text-center px-6 mt-[164.4px] w-full",
  secondText: "Schedule a Virtual Consultation",
  underLine: true,
  buttons: [
    {
      title: "Order Now",
      style: firstClassName,
    },
  ],
  bgImage:
    "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_Hero_D_001",
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
