const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "./public")));
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Servidor escutando em http://${HOSTNAME}:${PORT}`);
});
