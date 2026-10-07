import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function RestaurantDashboard() {

  const [donations, setDonations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      navigate("/login");

      return;
    }

    getDonations(user.id);

  }, []);


  // Get restaurant donations
  const getDonations = async (restaurantId) => {

    try {

      const response = await api.get(
        `/donations/restaurant/${restaurantId}`
      );

      setDonations(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load donations");

    }

  };


  // Delete donation
  const deleteDonation = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this donation?"
    );

    if (!confirmDelete) {

      return;

    }

    try {

      await api.delete(`/donations/${id}`);

      alert("Donation deleted successfully");

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      getDonations(user.id);

    } catch (error) {

      console.log(error);

      alert("Unable to delete donation");

    }

  };


  return (
    <div>

      <Navbar />


      <div className="dashboard">


        {/* Dashboard Header */}

        <div className="dashboard-header">

          <div>

            <h1>Restaurant Dashboard</h1>

            <p>
              Manage your surplus food donations
            </p>

          </div>


          <button
            className="add-food-btn"
            onClick={() => navigate("/add-donation")}
          >
            + Add Food
          </button>

        </div>


<div className="stats-container">

  <div className="stat-card">

    <h3>Total Donations</h3>

    <h2>{donations.length}</h2>

  </div>


  <div className="stat-card">

    <h3>Available</h3>

    <h2>
      {
        donations.filter(
          (donation) => donation.status === "AVAILABLE"
        ).length
      }
    </h2>

  </div>


  <div className="stat-card">

    <h3>Accepted</h3>

    <h2>
      {
        donations.filter(
          (donation) => donation.status === "ACCEPTED"
        ).length
      }
    </h2>

  </div>


  <div className="stat-card">

    <h3>Delivered</h3>

    <h2>
      {
        donations.filter(
          (donation) => donation.status === "DELIVERED"
        ).length
      }
    </h2>

  </div>


  <div className="stat-card">

    <h3>Completed</h3>

    <h2>
      {
        donations.filter(
          (donation) => donation.status === "COMPLETED"
        ).length
      }
    </h2>

  </div>

</div>
        {/* Section Title */}

        <div className="section-title">

          <h2>My Food Donations</h2>

        </div>



        {/* No Donations */}

        {donations.length === 0 ? (

          <div className="empty-message">

            <h3>No Donations Yet</h3>

            <p>
              You haven't added any surplus food.
            </p>


            <button
              className="add-food-btn"
              onClick={() => navigate("/add-donation")}
            >
              Add Your First Donation
            </button>

          </div>

        ) : (


          /* Donation Cards */

          <div className="donation-container">

            {donations.map((donation) => (

              <div
                className="donation-card"
                key={donation.id}
              >


                {/* Card Header */}

                <div className="card-header">

                  <h3>
                    {donation.foodName}
                  </h3>

                  <span className="status">
                    {donation.status}
                  </span>

                </div>


                <p>
                  <strong>Food Type:</strong>{" "}
                  {donation.foodType}
                </p>


                <p>
                  <strong>Quantity:</strong>{" "}
                  {donation.quantity} {donation.unit}
                </p>


                <p>
                  <strong>Description:</strong>{" "}
                  {donation.description}
                </p>


                <p>
                  <strong>Prepared:</strong>{" "}
                  {donation.preparedTime}
                </p>


                <p>
                  <strong>Expires:</strong>{" "}
                  {donation.expiryTime}
                </p>


                <p>
                  <strong>Pickup Address:</strong>{" "}
                  {donation.pickupAddress}
                </p>


                {/* Buttons */}

                <div className="card-buttons">

                  <button
                    className="primary-btn"
                    onClick={() =>
                      navigate(`/edit-donation/${donation.id}`)
                    }
                  >
                    ✏️ Edit
                  </button>


                  <button
                    className="secondary-btn"
                    onClick={() =>
                      deleteDonation(donation.id)
                    }
                  >
                    🗑️ Delete
                  </button>

                </div>


              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default RestaurantDashboard;