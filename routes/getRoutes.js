const express = require('express');
const router = express.Router();
const getController = require('../controllers/getController');

router.get('/menus/:id', getController.getMenus);
router.get('/orders/:id', getController.getOrderById);

module.exports = router;
