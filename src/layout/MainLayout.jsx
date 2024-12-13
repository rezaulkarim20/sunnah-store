import { Outlet } from "react-router-dom";
import Header from "../conponent/sheare/header/Header";
import Footer from "../conponent/sheare/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
