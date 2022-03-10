require("dotenv").config();

const express = require("express");
const app = express();

//ROUTES
app.get("/", (req, res) => {
    res.send(`<h1>Hello world</h1>`);
});

//Breads Controller
const breadController = require("./controllers/breads_controller.js");
app.use("/breads", breadController);

app.listen(process.env.PORT, () => {
    console.log("Server is live...");
});
