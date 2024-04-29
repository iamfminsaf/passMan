const express = require("express");
const passwordRoute = require("./routes/passwordRoute");

require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use("/api/password", passwordRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
