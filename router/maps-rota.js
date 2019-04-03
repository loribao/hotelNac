'use strict';
const express = require('express');
const router = express.Router();

const controle = require('../controller/maps-controller');


router.get('/', controle.get);

module.exports = router;