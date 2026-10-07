import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Logintemp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/auth/login",
        {
          email: email,
          password: password
        }
      );

      const token = response.data;

      console.log("JWT TOKEN:", token);

      localStorage.setItem("token", token);

      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      console.log("JWT PAYLOAD:", payload);

      const user = {
        id: payload.id,
        name: payload.name,
        email: payload.sub,
        role: payload.role
      };

      console.log("LOGIN USER:", user);

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      alert("Login successful");

      if (user.role === "RESTAURANT") {

        navigate("/restaurant");

      } else if (user.role === "NGO") {

        navigate("/ngo");

      } else if (user.role === "VOLUNTEER") {

        navigate("/volunteer");

      } else if (user.role === "ADMIN") {

        navigate("/admin");

      } else {

        alert("Invalid user role");

      }

    } catch (error) {

      console.log("LOGIN ERROR:", error);

      if (
        error.response &&
        error.response.data
      ) {

        alert(
          typeof error.response.data === "string"
            ? error.response.data
            : "Invalid email or password"
        );

      } else {

        alert(
          "Server error. Please check backend."
        );

      }
    }
  };

  return (

    <div className="auth-page">

      <div className="auth-container">

        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <h1 className="logo">
          🍲 Zero Hunger Hub
        </h1>

        <h2>
          Welcome Back
        </h2>

        <p className="auth-subtitle">
          Login to continue your journey
          of sharing food and spreading hope.
        </p>

        <form onSubmit={handleSubmit}>

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Login
          </button>

        </form>

        <p className="switch-text">
          Don't have an account?
        </p>

        <button
          className="secondary-btn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

      </div>

    </div>
  );
}

export default Logintemp;