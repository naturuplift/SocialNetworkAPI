// Include packages needed for this application
// Import Router function from express package
import { Router } from 'express';
const router = Router();

// Import API routes from ./api directory
import apiRoutes from './api/index.js';

// Use API routes for requests to /api
router.use('/api', apiRoutes);

// catch all route
router.use((req, res) => res.send('Wrong route!'));

// Export router to make it available for use
export default router;