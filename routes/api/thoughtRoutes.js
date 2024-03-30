// Import Router from express to handle route definitions
import { Router } from 'express';
// Import controller functions for thoughts and reactions
import {
    getAllThoughts, createThought, getThoughtById, updateThought, deleteThought, addReaction, removeReaction
} from '../../controllers/thoughtController.js'; // Adjust the path as needed

const router = Router();

// Routes for /api/thoughts

//  thoughts Routes
router.route('/')
    .get(getAllThoughts) // GET all thoughts
    .post(createThought); // POST a new thought

//  thoughtId routes
router.route('/:thoughtId')
    .get(getThoughtById) // GET a single thought by its _id
    .put(updateThought) // PUT to update a thought by its _id
    .delete(deleteThought); // DELETE to remove a thought by its _id

//  reactions routes
router.route('/:thoughtId/reactions')
    .post(addReaction); // POST to create a reaction

//  reactionId routes
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction); // DELETE to remove a reaction by the reaction's reactionId

// Export router to make these routes available
export default router;