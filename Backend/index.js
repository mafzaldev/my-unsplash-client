const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", routes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, () =>
  app.listen(3000, () => console.log("Server Up and running at 3000"))
);
