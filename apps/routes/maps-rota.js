'use strict';
const express = require('express');
const router = express.Router();

const controle = require('../controllers/maps-controller');


router.get('/', controle.get);

module.exports = router;