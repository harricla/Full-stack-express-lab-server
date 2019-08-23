const express = require("express");
const cartRoutes = express.Router();
const cart = require("./cart");

cartRoutes.get("/cart-items", (req, res) => {
    res.send(cart);
});

cartRoutes.post("/cart-items", (req, res) => {
    console.log(req.body);
    res.end();
});
cartRoutes.put("/cart-items/:id", (req, res) => {
    console.log(req.body, req.params.id);
    res.end();
});
cartRoutes.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    res.end();
});
module.exports = cartRoutes;