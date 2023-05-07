import Section from "./Section";
import { Data } from "@/Data";

const HomeScreen = () => {
  return (
    <>
      {Data.map((model) => (
        <Section
          key={model.id}
          title={model.title}
          bgImage={model.bgImage}
          secondText={model.secondText}
          underline={model.underLine}
          buttons={model.buttons}
          showArrow={model.showArrow}
        />
      ))}
    </>
  );
};

export default HomeScreen;
