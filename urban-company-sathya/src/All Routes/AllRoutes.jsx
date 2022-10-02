import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />}></Route>
    </Routes>
  );
}

export default AllRoutes;
