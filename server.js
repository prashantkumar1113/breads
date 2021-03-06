// DEPENDENCIES
require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("connected to mongo: ", process.env.MONGO_URI);
    }
);

const methodOverride = require("method-override");

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// ROUTES
// INDEX
app.get("/", (req, res) => {
    res.send("Bread App");
});

//Breads Controller
const breadController = require("./controllers/breads_controller.js");
app.use("/breads", breadController);

//Bakers Controller
const bakerController = require("./controllers/bakers_controller.js");
app.use("/bakers", bakerController);

app.get("*", (req, res) => {
    res.send("404 Error");
});

app.listen(process.env.PORT, () => {
    console.log("Server is live...on PORT=" + process.env.PORT);
});
