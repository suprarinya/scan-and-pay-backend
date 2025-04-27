const express = require('express');
const cors = require('cors');
const app = express();
const getRoutes = require('./routes/getRoutes');
// const postRoutes = require('./routes/postRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/get', getRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/payments', paymentRoutes);

// Error handler
// console.log(typeof errorHandler);
// app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
