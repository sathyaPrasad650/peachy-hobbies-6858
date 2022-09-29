import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<h1>Home</h1>}></Route>
    </Routes>
  );
}

export default AllRoutes;
