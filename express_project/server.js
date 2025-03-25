console.log("first console");
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/contacts", require("./Routes/ContactRoutes"));
app.use("/api/users", require("./Routes/UserRoutes.js"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`port listening at ${port}`);
});
