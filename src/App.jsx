import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Navbar from "./components/Navbar/Navbar";
import OrderPage from "./pages/OrderPage/OrderPage";
import UserPage from "./pages/UserPage/UserPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/admin/products/edit/:productId"
            element={<EditProductPage />}
          />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
