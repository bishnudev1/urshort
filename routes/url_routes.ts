import express, { Router } from 'express';
import { createShortURL, loadShortURL } from '../controlllers/url';

const router: Router = express.Router();

router.route('/url').post(createShortURL);
router.route('/url/:urlID').get(loadShortURL);

export default router;
