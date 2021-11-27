const express = require("express");
const path = require("path");

const port = 3000;

const app = express();
const publicDirectory = path.join(__dirname, "/public");
app.use(express.static(publicDirectory));

app.listen(port, "localhost", (error) => {
  if (error) {
    console.log("Unable to connect to server");
  }

  console.log(`Server up and running on port ${port}`);
});
