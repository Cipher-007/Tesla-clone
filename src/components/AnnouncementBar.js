const AnnouncementBar = ({ title }) => {
    return (
      <div className='bg-white text-center p-4 z-10 fixed w-full text-sm font-GothamSSm_Book text-gray-600 outline-offset-2'>
        <h1>
          {title} <span className='underline underline-offset-[3px]'>Learn More</span>
        </h1>
      </div>
    );
  };
  
  export default AnnouncementBar;
  