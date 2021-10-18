const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/User-controller');

// /api/Users
router
    .route('./users/')
    .get(getAllUser)
    .post(createUser);

// /api/Users/:id
router
    .route('./users/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;