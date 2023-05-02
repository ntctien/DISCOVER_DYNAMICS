import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import SearchLayout from "./layouts/SearchLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import About from './pages/About';
import TourDetail from "./pages/TourDetail";
import BookTour from "./pages/BookTour";
import Account from "./pages/Account";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />} path='/' >
        <Route element={<Home />} path='' />
        <Route element={<SearchLayout />}>
          <Route element={<Destination />} path="destination" />
          <Route element={<TourDetail />} path="destination/detail" />
          <Route element={<About />} path="about" />
          <Route element={<Account />} path="account" />
          <Route element={<Contact />} path="contact" />
        </Route>
        <Route element={<BookTour />} path="book-tour" />
      </Route>
    </Routes>
  );
}

export default App;
