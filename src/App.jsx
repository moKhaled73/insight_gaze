import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/model/Model";
import NotFound from "./pages/NotFound";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Navbar from "./components/navbar/Navbar";
import Recommendations from "./pages/recommendations/Recommendations";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import HOme from "./pages/Home";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HOme />} />
        <Route path="/model" element={<Model />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
