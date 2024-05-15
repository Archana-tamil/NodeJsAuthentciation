import passport from 'passport';
import express from 'express';
import {googleSignInController} from '../controllers/auth.controller.js';

const authRouter = express.Router()
const googleSignIn = new googleSignInController()

authRouter.get("/google", passport.authenticate('google', { scope: 
	[ 'email', 'profile' ] 
}));

authRouter.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

authRouter.get("/login/success", googleSignIn.signInSuccess);

authRouter.get("/login/failed", googleSignIn.signInFailed);

export {authRouter};
