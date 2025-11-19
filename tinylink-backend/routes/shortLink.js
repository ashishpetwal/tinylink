const express = require('express');
const { getAllShortLinks, createShortLink, deleteShortLink, getShortLinkByCode } = require('../controllers/shortLink');

const router = express.Router();

router.get('/', getAllShortLinks);
router.get('/:code', getShortLinkByCode)
router.post('/', createShortLink);
router.delete('/:code', deleteShortLink);

module.exports = router;