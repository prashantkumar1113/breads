// DEPENDENCIES
require("dotenv").config();

const express = require("express");
const app = express();
const methodOverride = require("method-override");

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//ROUTES
// INDEX
app.get("/", (req, res) => {
    res.send("Bread App");
});

//Breads Controller
const breadController = require("./controllers/breads_controller.js");
app.use("/breads", breadController);

app.get("*", (req, res) => {
    res.send("404 Error");
});

app.listen(process.env.PORT, () => {
    console.log("Server is live...on PORT=" + process.env.PORT);
});
