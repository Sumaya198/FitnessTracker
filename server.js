const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT || 4000;


const app = express();
///middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
console.log(process.env.MONGODB_URI)
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});