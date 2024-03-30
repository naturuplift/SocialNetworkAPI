// Import Router from express to handle route definitions
import { Router } from 'express';
// Import controller functions for user
import {
    getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend
} from '../../controllers/userController.js';

const router = Router();

// Routes for /api/user

//  users Routes
router.route('/')
    .get(getAllUsers)
    .post(createUser);

//  userId routes
router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//  friendId routes
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

// Export router to make these routes available
export default router;