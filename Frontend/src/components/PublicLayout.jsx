import { Outlet } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";

function PublicLayout() {

  return (
    <div>

      <PublicNavbar />

      <Outlet />

      <footer className="public-footer">

        <div className="footer-brand">

          <h2>
            🍲 Zero Hunger Hub
          </h2>

          <p>
            Turning surplus food into hope,
            one donation at a time.
          </p>

        </div>


        <div className="footer-links">

          <button>
            About
          </button>

          <button>
            How It Works
          </button>

          <button>
            Contact
          </button>

        </div>


        <div className="footer-copy">

          © 2026 Zero Hunger Hub

        </div>

      </footer>

    </div>
  );
}

export default PublicLayout;