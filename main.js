const express = require("express");
const cors = require("cors");
const fs = require("fs");

app = express();
app.use(cors());

app.get("/a", (req, res) => {
    res.send("Hola");
})

app.listen(process.env.PORT || 3000);