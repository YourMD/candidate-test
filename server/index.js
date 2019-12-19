const express = require("express");
const app = express();
const port = 5000;

app.get("/api/", (req, res) => res.send("Hello World!"));

app.get("/api/conditions", (req, res) => res.send("Conditions!"));

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));
