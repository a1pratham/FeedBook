import React from "react";
import AddFeedback from "./components/AddFeedback";
import FeedbackList from "./components/FeedbackList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
  <div className="container mt-5" style={{ maxWidth: "800px" }}>
    <h1 className="text-center mb-5">FeedBook</h1>

    <ToastContainer position="top-center" />

    <AddFeedback />
    <FeedbackList />
  </div>
);


}

export default App;
