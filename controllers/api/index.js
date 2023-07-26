const router = require('express').Router();
const userRoutes = require('./userRoutes');
const poetryRoutes = require('./poetryRoutes');

router.use('/users', userRoutes);
router.use('/poetry', poetryRoutes);

module.exports = router;
