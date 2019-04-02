'use strict';
const express = require('express');
const router = express.Router();

const controle = require('../controller/index-controller');


router.get('/', controle.get);

module.exports = router;