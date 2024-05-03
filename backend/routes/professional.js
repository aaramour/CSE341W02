// const router = require('express').Router();
// const professionalController = require('../controllers/professional');

// router.get('/professional', professionalController.professionalRoute);
// module.exports = router;

const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = router;