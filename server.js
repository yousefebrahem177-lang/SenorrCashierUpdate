const express = require("express");

const app = express();

app.use(express.json());

app.get("/healthz", (req, res) => {
    res.status(200).send("CalcPro Backend is running");
});

app.get("/", (req, res) => {
    res.send("CalcPro Backend");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});