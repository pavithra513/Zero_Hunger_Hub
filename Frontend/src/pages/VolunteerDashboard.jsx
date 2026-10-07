import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function VolunteerDashboard() {

  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
      return;
    }

    getTasks(user.id);

  }, [navigate]);


  // Get volunteer tasks
  const getTasks = async (volunteerId) => {

    try {

      const response = await api.get(
        `/donations/volunteer/${volunteerId}`
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load pickup tasks");

    }
  };


  // Mark as delivered
  const markDelivered = async (donationId) => {

    try {

      await api.put(
        `/donations/${donationId}/delivered`
      );

      alert("Food marked as delivered");

      const user = JSON.parse(localStorage.getItem("user"));

      getTasks(user.id);

    } catch (error) {

      console.log(error);

      alert("Unable to update delivery status");

    }
  };


  return (
    <div>

      <Navbar />

      <div className="dashboard">

        {/* Header */}

        <div className="dashboard-header">

          <div>

            <h1>Volunteer Dashboard</h1>

            <p>
              Manage your food pickup and delivery tasks
            </p>

          </div>

        </div>


        {/* Pickup Tasks */}

        <div className="section-title">

          <h2>My Pickup Tasks</h2>

        </div>


        {tasks.length === 0 ? (

          <div className="empty-message">

            <h3>No Pickup Tasks</h3>

            <p>
              You don't have any food pickup tasks yet.
            </p>

          </div>

        ) : (

          <div className="donation-container">

            {tasks.map((task) => (

              <div
                className="donation-card"
                key={task.id}
              >

                <div className="card-header">

                  <h3>{task.foodName}</h3>

                  <span className="status">
                    {task.status}
                  </span>

                </div>


                <p>
                  <strong>Food Type:</strong>{" "}
                  {task.foodType}
                </p>


                <p>
                  <strong>Quantity:</strong>{" "}
                  {task.quantity} {task.unit}
                </p>


                <p>
                  <strong>Description:</strong>{" "}
                  {task.description}
                </p>


                <p>
                  <strong>Pickup Address:</strong>{" "}
                  {task.pickupAddress}
                </p>


                <p>
                  <strong>Status:</strong>{" "}
                  {task.status}
                </p>


                {task.status === "PICKED_UP" && (

                  <button
                    className="primary-btn"
                    onClick={() =>
                      markDelivered(task.id)
                    }
                  >
                    Mark as Delivered
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

export default VolunteerDashboard;