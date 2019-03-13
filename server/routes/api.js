const express = require('express');
const router = express.Router();
// import {
//   Request,
//   Response,
//   NextFunction
// } from 'express';
var User = require('../../app/models/user');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


/* GET api listing. */
router.get('/get', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/allUser', (req, res, next) => {
  User.find().exec(function (err, user) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(user);
  });

});

router.post('/addUser', (req, res, next) => {
  console.log("req.body", req.body);
  var user = new User(req.body);
  user.save(function (err, saveUser) {
    if (err) return console.error(err);
    console.log("fluffy", saveUser);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true")

    res.send({
      "value": true
    });
  });

})

router.delete('/:id', (req, res, next) => {
  res.send("DELETE");

})

module.exports = router;
