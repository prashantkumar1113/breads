// dependencies
const express = require("express");
const baker = express.Router();
const Baker = require("../models/baker.js");
const bakerSeedData = require("../models/baker_seed.js");

baker.get("/data/seed", (req, res) => {
    Baker.insertMany(bakerSeedData).then(res.redirect("/breads"));
});

// Index:
baker.get("/", (req, res) => {
    Baker.find()
        .populate("breads")
        .then((foundBakers) => {
            res.json(foundBakers);
        });
});

// export
module.exports = baker;
