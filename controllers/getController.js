const menuModel = require('../models/menuModels');
const orderModel = require('../models/orderModel');

exports.getMenus = async (req, res, next) => {
  try {
    const menus = await menuModel.getAllMenus();
    res.json(menus);
  } catch (err) {
    next(err);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const order = await orderModel.getOrderById(req.params.id);
    res.json(order);
  } catch (err) {
    next(err);
  }
};
