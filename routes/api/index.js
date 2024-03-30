// Include packages needed for this application
import { Router } from 'express';
// import routes
import userRoutes from './userRoutes.js';
import thoughtRoutes from './thoughtRoutes.js';

const router = Router();
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// Export the configured router to be used by main application
export default router;