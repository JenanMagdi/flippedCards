import { Route, Routes } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
