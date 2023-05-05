import Body from "./Body";
import Title from "./Title";

const Section = ({
  title,
  className,
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
      className='h-screen bg-center bg-cover snap-start snap-always flex flex-col items-center justify-between font-GothamSSm_Medium'
    >
      <Title title={title} secondText={secondText} underline={underline} />
      <Body buttons={buttons} showArrow={showArrow} />
    </div>
  );
};

export default Section;
