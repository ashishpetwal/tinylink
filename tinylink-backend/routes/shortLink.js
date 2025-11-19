const express = require('express');
const { getAllShortLinks, createShortLink, deleteShortLink, getShortLinkByCode, redirectShortLink } = require('../controllers/shortLink');

const router = express.Router();

router.get('/', getAllShortLinks);
router.get('/:code', getShortLinkByCode);
router.get('/r/:code', redirectShortLink);
router.post('/', createShortLink);
router.delete('/:code', deleteShortLink);

module.exports = router;