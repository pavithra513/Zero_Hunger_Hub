import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout successful");

    navigate("/login");
  };

  const getRoleName = () => {

    if (!user) {
      return "";
    }

    if (user.role === "RESTAURANT") {
      return "Restaurant";
    }

    if (user.role === "NGO") {
      return "NGO";
    }

    if (user.role === "VOLUNTEER") {
      return "Volunteer";
    }

    if (user.role === "ADMIN") {
      return "Admin";
    }

    return "User";
  };

  return (
    <nav className="navbar">

      <div
        className="navbar-brand"
        onClick={() => navigate("/")}
      >

        <div className="brand-icon">
          🍲
        </div>

        <div>
          <h2>Zero Hunger Hub</h2>
          <span>Share Food • Spread Hope</span>
        </div>

      </div>


      <div className="navbar-right">

        {user && (
          <div className="profile-box">

            <div className="profile-icon">
              👤
            </div>

            <div className="profile-info">

              <strong>
                {user.name || "User"}
              </strong>

              <span>
                {getRoleName()}
              </span>

            </div>

          </div>
        )}

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;