import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function AddFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const feedback = { name, email, message };
      const res = await axios.post("http://localhost:5000/api/feedback", feedback);

      if (res.data.success) {
        toast.success("Feedback submitted successfully! 🎉", {
          autoClose: 1500,
        });

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <motion.div
      className="card p-4 shadow mb-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="mb-3">Add Feedback</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3 p-3 shadow-sm"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          className="form-control mb-3 p-3 shadow-sm"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          className="form-control mb-3 p-3 shadow-sm"
          placeholder="Your Feedback Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
        ></textarea>

        <button className="btn btn-primary w-100 p-2">Submit Feedback</button>
      </form>
    </motion.div>
  );
}

export default AddFeedback;
