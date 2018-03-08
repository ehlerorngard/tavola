// const path = require("path");
// const router = require('express').Router();
const db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render('home');
    });

    app.get("/parent", function(req, res) {
        res.render('add');
    });

    app.get("/api/parent/class", function(req, res) {
    	res.render('class');
    });

};