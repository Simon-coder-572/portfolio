const express = require("express");
const path = require("path");
const app = express();
const port = 5001;

// Stel de directory in voor statische bestanden (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "../frontend")));

app.listen(port, () => {
  console.log(`public website draait op http://localhost:${port}`);
});
