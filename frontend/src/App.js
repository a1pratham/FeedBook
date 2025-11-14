import React, { useEffect, useState } from "react";
import AddFeedback from "./components/AddFeedback";
import FeedbackList from "./components/FeedbackList";
import axios from "axios";

function App() {
  const [feedback, setFeedback] = useState([]);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/feedback");
      setFeedback(res.data.data);
    } catch (error) {
      console.error("Error fetching feedback");
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <h1 className="text-center mb-4 fw-bold">FeedBook</h1>

      {/* Pass fetchFeedback to child */}
      <AddFeedback refreshList={fetchFeedback} />

      {/* Pass feedback data */}
      <FeedbackList feedback={feedback} refreshList={fetchFeedback} />
    </div>
  );
}

export default App;
