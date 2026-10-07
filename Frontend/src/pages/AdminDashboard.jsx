import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function AdminDashboard() {

  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role !== "ADMIN") {
      alert("Access denied");
      navigate("/");
      return;
    }

    getUsers();
    getDonations();

  }, [navigate]);


  // Get Users

  const getUsers = async () => {

    try {

      const response = await api.get("/admin/users");

      setUsers(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load users");

    }
  };


  // Get Donations

  const getDonations = async () => {

    try {

      const response = await api.get("/admin/donations");

      setDonations(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load donations");

    }
  };


  // User Counts

  const restaurantCount = users.filter(
    (user) => user.role === "RESTAURANT"
  ).length;

  const ngoCount = users.filter(
    (user) => user.role === "NGO"
  ).length;

  const volunteerCount = users.filter(
    (user) => user.role === "VOLUNTEER"
  ).length;

  const adminCount = users.filter(
    (user) => user.role === "ADMIN"
  ).length;


  // Donation Counts

  const availableCount = donations.filter(
    (donation) => donation.status === "AVAILABLE"
  ).length;

  const acceptedCount = donations.filter(
    (donation) => donation.status === "ACCEPTED"
  ).length;

  const pickedUpCount = donations.filter(
    (donation) => donation.status === "PICKED_UP"
  ).length;

  const deliveredCount = donations.filter(
    (donation) => donation.status === "DELIVERED"
  ).length;

  const completedCount = donations.filter(
    (donation) => donation.status === "COMPLETED"
  ).length;


  return (

    <div>

      <Navbar />

      <div className="dashboard">


        {/* Header */}

        <div className="dashboard-header">

          <div>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Manage Zero Hunger Hub
            </p>

          </div>

        </div>


        {/* User Statistics */}

        <div className="section-title">

          <h2>
            User Statistics
          </h2>

        </div>


        <div className="stats-container">

          <div className="stat-card">

            <h3>
              Total Users
            </h3>

            <h2>
              {users.length}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Restaurants
            </h3>

            <h2>
              {restaurantCount}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              NGOs
            </h3>

            <h2>
              {ngoCount}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Volunteers
            </h3>

            <h2>
              {volunteerCount}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Admins
            </h3>

            <h2>
              {adminCount}
            </h2>

          </div>

        </div>


        {/* Donation Statistics */}

        <div className="section-title">

          <h2>
            Donation Statistics
          </h2>

        </div>


        <div className="stats-container">

          <div className="stat-card">

            <h3>
              Total Donations
            </h3>

            <h2>
              {donations.length}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Available
            </h3>

            <h2>
              {availableCount}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Accepted
            </h3>

            <h2>
              {acceptedCount}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Picked Up
            </h3>

            <h2>
              {pickedUpCount}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Delivered
            </h3>

            <h2>
              {deliveredCount}
            </h2>

          </div>


          <div className="stat-card">

            <h3>
              Completed
            </h3>

            <h2>
              {completedCount}
            </h2>

          </div>

        </div>


        {/* All Users */}

        <div className="section-title">

          <h2>
            All Users
          </h2>

        </div>


        {users.length === 0 ? (

          <div className="empty-message">

            <h3>
              No Users Found
            </h3>

          </div>

        ) : (

          <div className="donation-container">

            {users.map((user) => (

              <div
                className="donation-card"
                key={user.id}
              >

                <div className="card-header">

                  <h3>
                    {user.name}
                  </h3>

                  <span className="status">
                    {user.role}
                  </span>

                </div>

                <p>
                  <strong>ID:</strong>{" "}
                  {user.id}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {user.email}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {user.phone}
                </p>

                <p>
                  <strong>Role:</strong>{" "}
                  {user.role}
                </p>

              </div>

            ))}

          </div>

        )}


        {/* All Donations */}

        <div className="section-title">

          <h2>
            All Food Donations
          </h2>

        </div>


        {donations.length === 0 ? (

          <div className="empty-message">

            <h3>
              No Donations Found
            </h3>

            <p>
              There are no food donations yet.
            </p>

          </div>

        ) : (

          <div className="donation-container">

            {donations.map((donation) => (

              <div
                className="donation-card"
                key={donation.id}
              >

                <div className="card-header">

                  <h3>
                    {donation.foodName}
                  </h3>

                  <span className="status">
                    {donation.status}
                  </span>

                </div>


                <p>
                  <strong>Donation ID:</strong>{" "}
                  {donation.id}
                </p>


                <p>
                  <strong>Food Type:</strong>{" "}
                  {donation.foodType}
                </p>


                <p>
                  <strong>Quantity:</strong>{" "}
                  {donation.quantity}{" "}
                  {donation.unit}
                </p>


                <p>
                  <strong>Description:</strong>{" "}
                  {donation.description}
                </p>


                <p>
                  <strong>Prepared Time:</strong>{" "}
                  {donation.preparedTime}
                </p>


                <p>
                  <strong>Expiry Time:</strong>{" "}
                  {donation.expiryTime}
                </p>


                <p>
                  <strong>Pickup Address:</strong>{" "}
                  {donation.pickupAddress}
                </p>


                <p>
                  <strong>Restaurant ID:</strong>{" "}
                  {donation.restaurantId}
                </p>


                <p>
                  <strong>NGO ID:</strong>{" "}
                  {donation.ngoId || "Not assigned"}
                </p>


                <p>
                  <strong>Volunteer ID:</strong>{" "}
                  {donation.volunteerId || "Not assigned"}
                </p>


                <p>
                  <strong>Status:</strong>{" "}
                  {donation.status}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default AdminDashboard;