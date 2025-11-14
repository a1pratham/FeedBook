import React from "react";
import axios from "axios";

function FeedbackList({ feedback, refreshList }) {

  const deleteFeedback = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/feedback/${id}`);
      alert("Feedback deleted");
      refreshList(); // refresh list instantly
    } catch (error) {
      alert("Error deleting feedback");
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">All Feedback</h4>

      {feedback.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul className="list-group">
          {feedback.map((item) => (
            <li
              key={item._id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div>
                <strong>{item.name}</strong> – {item.email}
                <br />
                {item.message}
              </div>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteFeedback(item._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;
