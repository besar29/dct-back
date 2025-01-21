
const router = require('express').Router();
const controller = require('../controllers/shopify');
router.get('/',controller.getOne);

module.exports = router;