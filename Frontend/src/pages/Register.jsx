import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");

  const [role, setRole] = useState("RESTAURANT");


  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await api.post(
        "/auth/register",
        {
          name: name,

          email: email,

          password: password,

          phone: phone,

          role: role
        }
      );


      console.log(
        "REGISTER RESPONSE:",
        response.data
      );


      alert(response.data);


      /*
        After registration
        go to login page
      */

      navigate("/login");

    }

    catch (error) {

      console.log(
        "REGISTER ERROR:",
        error
      );


      if (
        error.response &&
        error.response.data
      ) {

        const serverError =
          typeof error.response.data === "string"
            ? error.response.data
            : error.response.data.message ||
              "Registration failed";


        alert(serverError);

      }

      else {

        alert(
          "Server error / Connection failed. Check if backend is running."
        );

      }

    }

  };


  return (

    <div className="auth-page">

      <div className="auth-container">


        {/* BACK TO HOME */}

        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>


        {/* LOGO */}

        <h1 className="logo">
          🍲 Zero Hunger Hub
        </h1>


        <h2>
          Create Your Account
        </h2>


        <p className="auth-subtitle">
          Join our community and help turn
          surplus food into hope.
        </p>


        {/* REGISTER FORM */}

        <form onSubmit={handleSubmit}>


          <label>
            Name
          </label>


          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />


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
            placeholder="Create a password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />


          <label>
            Phone
          </label>


          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            required
          />


          <label>
            Register As
          </label>


          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            required
          >

            <option value="RESTAURANT">
              Restaurant
            </option>

            <option value="NGO">
              NGO
            </option>

            <option value="VOLUNTEER">
              Volunteer
            </option>

          </select>


          <button
            type="submit"
            className="primary-btn"
          >
            Create Account
          </button>


        </form>


        {/* LOGIN */}

        <p className="switch-text">
          Already have an account?
        </p>


        <button
          className="secondary-btn"
          onClick={() =>
            navigate("/login")
          }
        >
          Login
        </button>


      </div>

    </div>

  );

}

export default Register;