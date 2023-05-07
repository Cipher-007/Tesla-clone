import Body from "./Body";
import Title from "./Title";

const Section = ({
  title,
  secondText,
  bgImage,
  underline,
  buttons,
  showArrow,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className='flex h-screen snap-start snap-always flex-col items-center justify-between bg-cover bg-center font-GothamSSm_Medium'
    >
      <Title title={title} secondText={secondText} underline={underline} />
      <Body buttons={buttons} showArrow={showArrow} />
    </div>
  );
};

export default Section;
