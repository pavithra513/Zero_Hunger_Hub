import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

function EditDonation() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [donation, setDonation] = useState({
    foodName: "",
    foodType: "",
    quantity: "",
    unit: "",
    description: "",
    preparedTime: "",
    expiryTime: "",
    pickupAddress: ""
  });

  const [loading, setLoading] = useState(true);

  // Get donation details
  const getDonation = async () => {

    try {

      const response = await api.get(`/donations/${id}`);

      setDonation(response.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert("Unable to get donation details");

      setLoading(false);
    }
  };


  useEffect(() => {

    getDonation();

  }, [id]);


  // Handle input change
  const handleChange = (e) => {

    setDonation({
      ...donation,
      [e.target.name]: e.target.value
    });

  };


  // Update donation
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(`/donations/${id}`, donation);

      alert("Donation updated successfully");

      navigate("/restaurant");

    } catch (error) {

      console.log(error);

      alert("Failed to update donation");

    }

  };


  if (loading) {

    return (
      <div>

        <Navbar />

        <div className="dashboard">

          <h2>Loading donation...</h2>

        </div>

      </div>
    );

  }


  return (
    <div>

      <Navbar />

      <div className="dashboard">

        <div className="donation-form">

          <h1>✏️ Edit Donation</h1>

          <p className="form-subtitle">
            Update your food donation details
          </p>


          <form onSubmit={handleSubmit}>

            {/* Food Name */}
            <label>Food Name</label>

            <input
              type="text"
              name="foodName"
              value={donation.foodName}
              onChange={handleChange}
              required
            />


            {/* Food Type */}
            <label>Food Type</label>

            <input
              type="text"
              name="foodType"
              value={donation.foodType}
              onChange={handleChange}
              required
            />


            {/* Quantity */}
            <label>Quantity</label>

            <input
              type="number"
              name="quantity"
              value={donation.quantity}
              onChange={handleChange}
              required
            />


            {/* Unit */}
            <label>Unit</label>

            <select
              name="unit"
              value={donation.unit}
              onChange={handleChange}
              required
            >

              <option value="">Select Unit</option>

              <option value="KG">KG</option>

              <option value="LITRE">Litre</option>

              <option value="PACKETS">Packets</option>

              <option value="PLATES">Plates</option>

            </select>


            {/* Description */}
            <label>Description</label>

            <textarea
              name="description"
              value={donation.description || ""}
              onChange={handleChange}
              rows="4"
            />


            {/* Prepared Time */}
            <label>Prepared Time</label>

            <input
              type="datetime-local"
              name="preparedTime"
              value={donation.preparedTime || ""}
              onChange={handleChange}
              required
            />


            {/* Expiry Time */}
            <label>Expiry Time</label>

            <input
              type="datetime-local"
              name="expiryTime"
              value={donation.expiryTime || ""}
              onChange={handleChange}
              required
            />


            {/* Pickup Address */}
            <label>Pickup Address</label>

            <textarea
              name="pickupAddress"
              value={donation.pickupAddress || ""}
              onChange={handleChange}
              rows="3"
              required
            />


            <button
              type="submit"
              className="primary-btn"
            >
              Update Donation
            </button>


            <button
              type="button"
              className="secondary-btn"
              onClick={() => navigate("/restaurant")}
            >
              Cancel
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditDonation;