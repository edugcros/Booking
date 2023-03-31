import { Route, Routes, Navigate } from "react-router-dom";
import userRequest from "../api/userRequest";
import { useSelector } from "react-redux";
import Login from "../pages/login/Login";
import Userl from "../pages/user/Userl";
import Home from "../pages/home/Home";
import List from "../pages/list/List";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

function registerHeader(token) {
  userRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function AppRouter() {
  const admin = useSelector((state) => state.user?.currentUser.isAdmin);
  const token = useSelector((state) => state.user.token);

  console.log(admin);
  if (token) {
    registerHeader(token);
  }

  return (
    <Routes>
      {admin && <Route path="/hotels" exact element={<List />} />}
      {admin && <Route path="/" exact element={<Home />} />}
      <Route path="/hotels" element={<Navigate replace to="/login" />} />
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="/" element={<Userl />}></Route>
    </Routes>
  );
}

export default AppRouter;
