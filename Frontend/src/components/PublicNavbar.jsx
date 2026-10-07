import { useNavigate } from "react-router-dom";

function PublicNavbar() {

  const navigate = useNavigate();

  return (
    <nav className="public-navbar">

      <div
        className="public-brand"
        onClick={() => navigate("/")}
      >

        <div className="public-brand-icon">
          🍲
        </div>

        <div>

          <h2>
            Zero Hunger Hub
          </h2>

          <span>
            Share Food • Spread Hope
          </span>

        </div>

      </div>


      <div className="public-nav-links">

        <button
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          onClick={() => navigate("/about")}
        >
          About
        </button>

        <button
          onClick={() => navigate("/how-it-works")}
        >
          How It Works
        </button>

        <button
          onClick={() => navigate("/reviews")}
        >
          Reviews
        </button>

        <button
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>

      </div>


      <div className="public-nav-actions">

        <button
          className="nav-login"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="nav-register"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>

      </div>

    </nav>
  );
}

export default PublicNavbar;