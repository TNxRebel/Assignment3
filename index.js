const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/book-library";

mongoose
  .connect(MONGODB_URI)
  .then(x => console.log(`Connected to MongoDB: ${x.connection.name}`))
  .catch(err => console.error("Error connecting to MongoDB", err));

const PORT = 8008;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

const bookRoutes = require("./routes/book.routes");
app.use("/api", bookRoutes);