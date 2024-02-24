import express from 'express';
import {createShortURL, loadShortURL} from '../controlllers/url.js';

const router = express.Router();

router.route('/url').post(createShortURL);
router.route('/url/:urlID').get(loadShortURL);

export default router;