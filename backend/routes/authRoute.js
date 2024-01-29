import express from 'express';
import { loginController, registerController, testController } from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//routing
//register || method post
router.post('/register',registerController)

//login
router.post('/login', loginController)

router.get('/test',requireSignIn, isAdmin, testController)

export default router