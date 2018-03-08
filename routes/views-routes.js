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

    app.get("/staff/student", function(req, res) {
        res.render('partials/studentprofiles-block');
    });

    app.get("/staff/addparent", function(req, res) {
    	res.render('staff/add-parent')
    });

    app.get("/staff/signup", function(req, res) {
    	res.render('staff/create');
    });

    app.get("/staff/search", function(req, res) {
        res.render('staff/search');
    });
};