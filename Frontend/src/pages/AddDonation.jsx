import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function AddDonation() {

  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [preparedTime, setPreparedTime] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      alert("Please login first");

      navigate("/login");

      return;
    }

    const donation = {

      foodName: foodName,

      foodType: foodType,

      quantity: Number(quantity),

      unit: unit,

      description: description,

      preparedTime: preparedTime,

      expiryTime: expiryTime,

      pickupAddress: pickupAddress,

      restaurantId: user.id

    };

    try {

      const response = await api.post(
        "/donations",
        donation
      );

      console.log(response.data);

      alert("Food added successfully");

      navigate("/restaurant");

    } catch (error) {

      console.log(error);

      alert("Failed to add food");

    }
  };

  return (
    <div>

      <Navbar />

      <div className="donation-form">

        <h1>Add Surplus Food</h1>

        <p className="form-subtitle">
          Share your surplus food with people in need.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Food Name</label>

          <input
            type="text"
            placeholder="Example: Vegetable Rice"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />

          <label>Food Type</label>

          <input
            type="text"
            placeholder="Example: Rice"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            required
          />

          <label>Quantity</label>

          <input
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <label>Unit</label>

          <input
            type="text"
            placeholder="Packets / Kg / Litres"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
          />

          <label>Description</label>

          <textarea
            placeholder="Enter food description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Prepared Time</label>

          <input
            type="datetime-local"
            value={preparedTime}
            onChange={(e) => setPreparedTime(e.target.value)}
            required
          />

          <label>Expiry Time</label>

          <input
            type="datetime-local"
            value={expiryTime}
            onChange={(e) => setExpiryTime(e.target.value)}
            required
          />

          <label>Pickup Address</label>

          <textarea
            placeholder="Enter restaurant pickup address"
            value={pickupAddress}
            onChange={(e) => setPickupAddress(e.target.value)}
            required
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Add Food Donation
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddDonation;