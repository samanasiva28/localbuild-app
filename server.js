const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello Buddy! Backend is working successfully 🚀"
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
