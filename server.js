require("dotenv").config();

const express = require("express");
const app = express();

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//ROUTES
// INDEX
app.get("/", (req, res) => {
    res.send("Bread App");
});

//Breads Controller
const breadController = require("./controllers/breads_controller.js");
app.use("/breads", breadController);

app.listen(process.env.PORT, () => {
    console.log("Server is live...");
});
