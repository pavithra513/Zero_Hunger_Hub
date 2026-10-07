import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function NgoDashboard() {

  const [donations, setDonations] = useState([]);
  const [acceptedDonations, setAcceptedDonations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
      return;
    }

    getAvailableDonations();
    getAcceptedDonations(user.id);

  }, [navigate]);


  // Get available food
  const getAvailableDonations = async () => {

    try {

      const response = await api.get(
        "/donations/available"
      );

      setDonations(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load available food");

    }
  };


  // Get NGO donations
  const getAcceptedDonations = async (ngoId) => {

    try {

      const response = await api.get(
        `/donations/ngo/${ngoId}`
      );

      setAcceptedDonations(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load donations");

    }
  };


  // Accept food
  const acceptDonation = async (donationId) => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    try {

      await api.put(
        `/donations/${donationId}/accept/${user.id}`
      );

      alert("Food accepted successfully");

      getAvailableDonations();
      getAcceptedDonations(user.id);

    } catch (error) {

      console.log(error);

      alert("Unable to accept food");

    }
  };


  // Assign volunteer
  const assignVolunteer = async (donationId) => {

    const volunteerInput = document.getElementById(
      `volunteer-${donationId}`
    );

    const volunteerId = volunteerInput.value;

    if (!volunteerId) {

      alert("Please enter Volunteer ID");

      return;
    }

    try {

      await api.put(
        `/donations/${donationId}/volunteer/${volunteerId}`
      );

      alert("Volunteer assigned successfully");

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      getAcceptedDonations(user.id);

    } catch (error) {

      console.log(error);

      alert("Unable to assign volunteer");

    }
  };


  // Complete donation
  const completeDonation = async (donationId) => {

    const confirmComplete = window.confirm(
      "Has the food been delivered successfully?"
    );

    if (!confirmComplete) {
      return;
    }

    try {

      await api.put(
        `/donations/${donationId}/complete`
      );

      alert("Donation completed successfully");

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      getAcceptedDonations(user.id);

    } catch (error) {

      console.log(error);

      alert("Unable to complete donation");

    }
  };


  return (
    <div>

      <Navbar />

      <div className="dashboard">

        {/* Header */}

        <div className="dashboard-header">

          <div>

            <h1>NGO Dashboard</h1>

            <p>
              Find and manage food donations
            </p>

          </div>

        </div>


        {/* Available Food */}

        <div className="section-title">

          <h2>Available Food Donations</h2>

        </div>


        {donations.length === 0 ? (

          <div className="empty-message">

            <h3>No Food Available</h3>

            <p>
              Currently there are no available food donations.
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

                  <h3>{donation.foodName}</h3>

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

                <button
                  className="primary-btn"
                  onClick={() =>
                    acceptDonation(donation.id)
                  }
                >
                  Accept Food
                </button>

              </div>

            ))}

          </div>

        )}


        {/* My Donations */}

        <div className="section-title">

          <h2>My Accepted Donations</h2>

        </div>


        {acceptedDonations.length === 0 ? (

          <div className="empty-message">

            <h3>No Donations</h3>

            <p>
              You have not accepted any food donations yet.
            </p>

          </div>

        ) : (

          <div className="donation-container">

            {acceptedDonations.map((donation) => (

              <div
                className="donation-card"
                key={donation.id}
              >

                <div className="card-header">

                  <h3>{donation.foodName}</h3>

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
                  <strong>Pickup Address:</strong>{" "}
                  {donation.pickupAddress}
                </p>


                <p>
                  <strong>Status:</strong>{" "}
                  {donation.status}
                </p>


                {/* Assign Volunteer */}

                {donation.status === "ACCEPTED" && (

                  <div>

                    <label>
                      Volunteer ID
                    </label>

                    <input
                      type="number"
                      id={`volunteer-${donation.id}`}
                      placeholder="Enter Volunteer ID"
                    />

                    <button
                      className="primary-btn"
                      onClick={() =>
                        assignVolunteer(donation.id)
                      }
                    >
                      Assign Volunteer
                    </button>

                  </div>

                )}


                {/* Complete Donation */}

                {donation.status === "DELIVERED" && (

                  <button
                    className="primary-btn"
                    onClick={() =>
                      completeDonation(donation.id)
                    }
                  >
                    Complete Donation
                  </button>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default NgoDashboard;