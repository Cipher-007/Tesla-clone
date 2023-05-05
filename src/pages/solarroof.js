import Section from "@/components/Section";

const model = {
  id: "1",
  title: "Solar Roof",
  className: "h-12 text-center px-6 mt-[164.4px] w-full",
  secondText: null,
  underLine: false,
  buttons: [
    {
      title: "Order Now",
      className: "bg-transparent border-2 border-white text-white w-[235px]",
    },
  ],
  bgImage:
    "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Solar-Roof-Hero-Desktop-Global",
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