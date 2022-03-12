const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
// INDEX
breads.get("/", (req, res) => {
    res.render("Index", {
        breads: Bread,
    });
    // res.send(Bread)
});
breads.get("/:arrayIndex", (req, res) => {
    // res.send(Bread[req.params.arrayIndex]);
    const breadJSON = Bread[req.params.arrayIndex];
    if (breadJSON) {
        res.render("Show", {
            bread: breadJSON,
        });
    } else {
        // res.send("Sorry, that bread is not found");
        res.render("notfound");
    }
});

module.exports = breads;
