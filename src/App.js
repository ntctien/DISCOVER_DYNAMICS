import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />} path='/' >
        <Route element={<Home />} path='' />
      </Route>
    </Routes>
  );
}

export default App;
