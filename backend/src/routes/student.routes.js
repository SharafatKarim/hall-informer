import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { addStudent, getAllStudents, getStudentById } from '../controllers/student.controller.js';

const router = express.Router();

router.get('/all', protectRoute, getAllStudents);
router.get('/:id', protectRoute, getStudentById);
router.post('/add', protectRoute, addStudent);

export default router;