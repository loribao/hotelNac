'use strict';
const express = require('express');
const router = express.Router();

const controle = require('../controllers/index-controller');


router.get('/', controle.get);

module.exports = router;