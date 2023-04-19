import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-background">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default HomeLayout;
