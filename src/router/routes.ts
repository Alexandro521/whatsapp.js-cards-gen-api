import { Router } from 'express';
import Controller from '../controller/controller';

export const router = Router();

router.post('/card', Controller.getCards);
router.post('/top', Controller.getTopCards);