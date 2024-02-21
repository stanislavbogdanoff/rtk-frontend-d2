import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useUser();

  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h2>App</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Dashboard</Link>
        {user ? (
          <button
            onClick={() => {
              dispatch(logoutUser());
              navigate("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link> /{" "}
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
