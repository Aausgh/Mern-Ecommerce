import express from 'express';
import { forgotPasswordController, loginController, registerController, updateProfileController } from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//routing
//register || method post
router.post('/register',registerController)

//login
router.post('/login', loginController)

//forgot password
router.post('/forgot-password', forgotPasswordController)

//protected route
router.get('/user-auth', requireSignIn, (req, res) => {
      res.status(200).send({ ok: true })
})

//admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
      res.status(200).send({ ok: true })
})

//update profile
router.put('/profile', requireSignIn, updateProfileController)

export default router