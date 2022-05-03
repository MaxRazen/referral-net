import express from 'express';
import signInHandler from './auth/sign-in.js';
import authorizeHandler from './auth/authorize.js';

export const router = express.Router();

router.post('/sign-in', signInHandler);

router.post('/authorize', authorizeHandler);

export default router;
