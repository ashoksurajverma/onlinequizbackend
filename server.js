const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const userRoutes = require("./routes/user.route");
const questionRoute = require("./routes/question.route");

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle CORS errors
app.use(cors());
app.use("/", userRoutes);
app.use("/questions", questionRoute);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "";
  res.status(statusCode).json({
    message: message,
    error: error,
  });
});

mongoose
  .connect("mongodb+srv://sverma:Test%4012345@cluster0.tywclfr.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongo db");
    app.listen(PORT, () => {
      console.log("PORT is is listing on : " + PORT);
    });
  })
  .catch((err) => {
    console.log("Error connecting to mongoDB", err);
  });
