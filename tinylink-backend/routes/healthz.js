const express = require('express');

const router = express.Router();

const healthzController = require('../controllers/healthz');

router.get('/', healthzController);

module.exports = router;