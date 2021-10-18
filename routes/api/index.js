const router = require('express').Router();
const usersRoutes = require('./users/users-routes');
const thoughtsRoutes = require('./thoughts/thoughts-routes');

router.use('/thoughts/thoughts', thoughtsRoutes);
router.use('/users/users', usersRoutes);

module.exports = router;