import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function FeedbackList() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/feedback");
      setFeedback(res.data.data);
    } catch (error) {
      console.log("Error fetching feedback:", error);
      toast.error("Failed to fetch feedback 😢");
    }
  };

  const deleteFeedback = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/feedback/${id}`);
      toast.warn("Feedback deleted ❌", { autoClose: 1200 });
      fetchFeedback(); // refresh list
    } catch (error) {
      console.log("Error deleting feedback:", error);
      toast.error("Error deleting feedback");
    }
  };

  return (
    <motion.div
      className="card p-4 shadow mt-4 mb-5"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="mb-3">All Feedback</h3>

      {feedback.length === 0 ? (
        <p className="text-muted">No feedback submitted yet.</p>
      ) : (
        <ul className="list-group mt-3">
          {feedback.map((item) => (
            <motion.li
              key={item._id}
              className="list-group-item d-flex justify-content-between align-items-start p-3 mb-2 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <strong>{item.name}</strong> — {item.email}
                <br />
                {item.message}
                <br />
                <small className="text-muted">
                  {new Date(item.date).toLocaleString()}
                </small>
              </div>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteFeedback(item._id)}
                style={{ borderRadius: "6px" }}
              >
                ✖ Delete
              </button>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default FeedbackList;
