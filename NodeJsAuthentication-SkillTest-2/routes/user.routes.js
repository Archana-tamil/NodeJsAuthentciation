import express from 'express';
import {UserController, UserPostController} from '../controllers/user.controller.js';

const userRouter = express.Router()
const UserGetcontroller = new UserController()
const UserPostcontroller = new UserPostController()

userRouter.get('/signup', UserGetcontroller.getSignUpPage);
userRouter.get('/signin', UserGetcontroller.getSignInPage);
userRouter.get('/homepage', UserGetcontroller.homePage);
userRouter.get('/signout', UserGetcontroller.logoutUser);
userRouter.get('/forgot-password', UserGetcontroller.getForgotPassword);
userRouter.get('/change-password', UserGetcontroller.getChangePassword);
userRouter.post('/signup', UserPostcontroller.createUser);
userRouter.post('/signin', UserPostcontroller.signInUser);
userRouter.post('/forgot-password', UserPostcontroller.forgotPassword);
userRouter.post('/change-password', UserPostcontroller.changePassword);


export default userRouter;