const AnnouncementBar = ({ title }) => {
  return (
    <div className='fixed z-10 w-full bg-white p-4 text-center font-GothamSSm_Book text-sm text-gray-600 outline-offset-2'>
      <h1>
        {title}{" "}
        <span className='underline underline-offset-[3px]'>Learn More</span>
      </h1>
    </div>
  );
};

export default AnnouncementBar;
