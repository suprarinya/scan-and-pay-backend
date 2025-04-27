const db = require('./db'); // mysql2 connection

exports.getAllMenus = async () => {
  const [rows] = await db.query('SELECT * FROM menu_items WHERE is_available = 1');
  return rows;
};
