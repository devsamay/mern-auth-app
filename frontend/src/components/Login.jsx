import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
const API_URL = import.meta.env.VITE_API_URL;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
  e.preventDefault();
 try {
  const res = await axios.post(`${API_URL}/login`, formData);
  console.log("Response:", res.data);
  alert("Login successful");
} catch (error) {
  console.error("Login error:", error.response?.data || error.message);
  alert("Login failed: " + (error.response?.data?.message || error.message));
}

    console.log("Login data:", formData);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
