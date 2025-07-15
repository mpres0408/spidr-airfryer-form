import React, { useState } from "react";
import "./App.css";

function App() {
  const defaultFormData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    guess: "",
    pin: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [showPin, setShowPin] = useState(false);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const togglePinVisibility = () => {
    setShowPin((prev) => !prev);
  };
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.guess.trim()) newErrors.guess = "Required";

    const numericPin = formData.pin.replace(/\D/g, "");
    if (numericPin.length !== 16)
      newErrors.pin = "PIN must be 16 digits (formatted as 1234-5678-9012-3456)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.warn("Form validation failed.");
      return;
    }

    //const maskedPin = "****-****-****-****";
    //const dataToLog = { ...formData, pin: maskedPin };
    console.log("Submitted Data:", formData);
    alert("Form submitted! Check console for data.");
    setFormData(defaultFormData);
  };
  const handlePinChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    // Insert dashes every 4 digits
    const parts = [];
    for (let i = 0; i < value.length; i += 4) {
      parts.push(value.substring(i, i + 4));
    }
    const formatted = parts.join("-").slice(0, 19); // max length = 19
    setFormData((prev) => ({ ...prev, pin: formatted }));
  };

  return (
      <div className="form-container">
        <h1>Reserve Your Spidr Air Fryer</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label>Guess the Air Fryer’s Cost ($)</label>
            <input
                name="guess"
                type="number"
                value={formData.guess}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label>Spidr Secret PIN</label>
            <div className="pin-wrapper">
              <input
                  name="pin"
                  type={showPin ? "text" : "password"}
                  placeholder="1234-5678-9012-3456"
                  value={formData.pin}
                  onChange={handlePinChange}
                  maxLength={19}
                  required
              />
              <button
                  type="button"
                  onClick={togglePinVisibility}
                  className="toggle-button"
              >
                {showPin ? "Hide" : "Show"}
              </button>
            </div>
            {errors.pin && <p className="error-text">{errors.pin}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default App;