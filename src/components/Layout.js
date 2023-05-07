import { useRouter } from "next/router";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";

const title = {
  "/": "Up to $7,500 tax credit available for Model Y and Model 3.",
  "/models": "Receive 3 years unlimited free Supercharging.",
  "/model3": "$3,750 - $7,500 tax credit available for Model 3.",
  "/modelx": "Receive 3 years unlimited free Supercharging.",
  "/modely": "$7,500 tax credit available for Model Y.",
};

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const announcementTitle = title[pathname];
  return (
    <>
      {title[pathname] && <AnnouncementBar title={announcementTitle} />}
      <Header />
      <main className='h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth'>
        {children}
      </main>
    </>
  );
};

export default Layout;
