const express = require("express");
const router = express.Router();
const productModel = require("../mysqlmodels/todo");
router.get("/", function (req, res) {
    productModel.findAll().then(
        function (todos) {
            res.status(200).json(todos);
        },
        function (error) {
            res.status(500).send(error);
        }
    );
});

router.get("/create/:title/:description/:status", function (req, res) {
    productModel.create({ title: req.params.title, description: req.params.description, status: req.params.status })
        .then(function (todo) {
            res.status(200).json(todo);
        })
})
module.exports = router;