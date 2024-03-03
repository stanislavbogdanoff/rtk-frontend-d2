import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useUser();

  const dispatch = useDispatch();
  return (
    <header className="navbar">
      <h2>App</h2>
      <nav>
        <Link to="/">Home</Link>
        {user && user?.role === "admin" ? (
          <Link to="/admin">Admin Dashboard</Link>
        ) : (
          <Link to={`/profile/${user?._id}`}>Profile</Link>
        )}
        {user ? (
          <>
            <Cart />
            <button
              onClick={() => {
                dispatch(logoutUser());
                navigate("/login");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> /{" "}
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
