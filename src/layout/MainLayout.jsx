import { Outlet } from "react-router-dom";
import Header from "../conponent/sheare/header/Header";
import Footer from "../conponent/sheare/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
