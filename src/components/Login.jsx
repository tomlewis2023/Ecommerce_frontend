import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const apiURL = import.meta.env.VITE_PRODUCTS_API

    try {
      const res = await fetch(`${apiURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setAuthenticated(true);
        navigate("/products");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <a href="/signup" className="link">
          Don’t have an account? Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;
