import "./navbar.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/userRedux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={
      type === "out" ? "navbar mode" : "navbar"
      }
      >
      <div className="navContainer">
        <div style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking</span>
        </div>
      </div>
      {type !== "out" && (
        <>
          <Button size="large" color="primary" onClick={handleLogout}>
            LogOut
          </Button>
        </>
      )}
    </div>
  );
};

export default Navbar;
