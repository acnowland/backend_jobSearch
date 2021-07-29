const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const allPosts = require("./routes/api/Posts.js");

//middleware
const app = express();
app.use(cors());
app.use(express.json());

//db connection
const db = require("./secrets/secrets.js").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the Database"))
  .catch((error) => console.log(error));

//use routes
app.use("/api/posts", allPosts);

// server connection
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
