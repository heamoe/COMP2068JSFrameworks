const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home Page' });
});

router.get('/item1', function(req, res) {
  res.render('item1');
});

router.get('/item2', function(req, res) {
  res.render('item2');
});

router.get('/item3', function(req, res) {
  res.render('item3');
});

router.get('/item4', function(req, res) {
  res.render('item4');
});

module.exports = router;
