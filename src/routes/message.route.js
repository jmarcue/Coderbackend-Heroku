import express from 'express';
import messageClass from '../controllers/message.controller.js';
import { validate } from '../middlewares/auth.middleware.js';

const messageRoute = express.Router();
const message = new messageClass();

messageRoute.post('/', validate, message.addMsg);
messageRoute.get('/', validate, message.findAllMsg);

export default messageRoute;