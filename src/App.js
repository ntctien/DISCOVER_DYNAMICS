import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ModalContext } from "./contexts/ModalContext";
import HomeLayout from "./layouts/HomeLayout";
import SearchLayout from "./layouts/SearchLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import About from './pages/About';
import TourDetail from "./pages/TourDetail";
import BookTour from "./pages/BookTour";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import BookedTours from "./pages/BookedTours";
import SignIn from "./components/modals/SignIn";
import SignUp from "./components/modals/SignUp";
import LogOut from "./components/modals/LogOut";
import ChangePassword from "./components/modals/ChangePassword";
import { useEffect } from "react";

function App() {
  const { currentModal, setCurrentModal } = useContext(ModalContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route element={<HomeLayout />} path='/' >
          <Route element={<Home />} path='' />
          <Route element={<SearchLayout />}>
            <Route path="destination">
              <Route element={<Destination />} index />
              <Route element={<TourDetail />} path=":destinationId" />
            </Route>
            <Route element={<About />} path="about" />
            <Route element={<Account />} path="account" />
            <Route element={<Contact />} path="contact" />
          </Route>
          <Route element={<BookTour />} path="book-tour" />
          <Route element={<BookedTours />} path="booked-tours" />
        </Route>
      </Routes>
      {/* Modals */}
      <SignIn
        open={currentModal === "sign-in"}
        handleCancel={() => setCurrentModal(null)}
        handleSignUp={() => setCurrentModal("sign-up")}
      />
      <SignUp
        open={currentModal === "sign-up"}
        handleCancel={() => setCurrentModal(null)}
        handleSignIn={() => setCurrentModal("sign-in")}
      />
      <LogOut
        open={currentModal === "sign-out"}
        handleCancel={() => setCurrentModal(null)}
      />
      <ChangePassword
        open={currentModal === "change-password"}
        handleCancel={() => setCurrentModal(null)}
      />
    </div>
  );
}

export default App;
