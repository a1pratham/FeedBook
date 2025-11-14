import React, { useState } from "react";
import axios from "axios";

function AddFeedback({ refreshList }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/feedback", {
        name,
        email,
        message,
      });

      alert("Feedback submitted successfully!");

      setName("");
      setEmail("");
      setMessage("");

      refreshList(); // <-- THIS IS THE MAGIC LINE 🔥🔥🔥

    } catch (error) {
      alert("Error submitting feedback");
    }
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">Add Feedback</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Feedback"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button className="btn btn-primary w-100">Submit Feedback</button>
      </form>
    </div>
  );
}

export default AddFeedback;
