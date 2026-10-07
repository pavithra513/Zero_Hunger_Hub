import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

import Logintemp from "./pages/Logintemp";
import Register from "./pages/Register";

import RestaurantDashboard from "./pages/RestaurantDashboard";
import AddDonation from "./pages/AddDonation";
import EditDonation from "./pages/EditDonation";

import NgoDashboard from "./pages/NgoDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicLayout from "./components/PublicLayout";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC WEBSITE */}

        <Route element={<PublicLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />

          <Route
            path="/reviews"
            element={<Reviews />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Logintemp />}
        />


        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* RESTAURANT */}

        <Route
          path="/restaurant"
          element={
            <ProtectedRoute allowedRole="RESTAURANT">
              <RestaurantDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-donation"
          element={
            <ProtectedRoute allowedRole="RESTAURANT">
              <AddDonation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-donation/:id"
          element={
            <ProtectedRoute allowedRole="RESTAURANT">
              <EditDonation />
            </ProtectedRoute>
          }
        />


        {/* NGO */}

        <Route
          path="/ngo"
          element={
            <ProtectedRoute allowedRole="NGO">
              <NgoDashboard />
            </ProtectedRoute>
          }
        />


        {/* VOLUNTEER */}

        <Route
          path="/volunteer"
          element={
            <ProtectedRoute allowedRole="VOLUNTEER">
              <VolunteerDashboard />
            </ProtectedRoute>
          }
        />


        {/* ADMIN */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;