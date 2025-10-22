import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="mb-6 space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Login</Link>
        <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
