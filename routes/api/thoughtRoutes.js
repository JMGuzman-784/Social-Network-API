const router = require('express').Router();
const {
getThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// /api/Thoughts/:ThoughtId/reactions




// /api/Thoughts/:ThoughtId/reactions/:reactionId




module.exports = router;