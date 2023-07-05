const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
// app.set('view engine', 'ejs');
app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "./salom.html"));
});

app.listen(8080, () => {
    console.log("server is running");
});
