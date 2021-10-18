const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    removeReply
} = require('../../controllers/Thought-controller');

// /api/Thoughts/<userId>
router.route('./thoughts/:userId').post(addThought);

// /api/Thoughts/<userId>/<thoughtId>
router
    .route('./thoughts/:userId/:thoughtId')
    .get(ThoughtById)
    .get(AllThought)
    .delete(removeThought);

// /api/Thoughts/

// /api/Thoughts/<userId>/<thoughtId>/<reactions>
router
    .route('./thoughts/:userId/:thoughtId/:reactions').post(reactions)
    .route('./thoughts/:userId/:thoughtId/:reactions').delete(removeReply);

module.exports = router;