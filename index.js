const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Node.js Application");
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello Bunny! Backend is working successfully 🚀,Njoy the party man!"
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
