const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // load .env first
console.log("MONGO_URI is:", process.env.MONGO_URI);
console.log("PORT is:", process.env.PORT);
connectDB();

connectDB(); // connect to DB

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
