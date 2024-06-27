import express, { Router } from 'express';
import { createShortURL, loadShortURL,getAllUrls } from '../controlllers/url';

const router: Router = express.Router();

router.route('/').get(getAllUrls);
router.route('/create-url').post(createShortURL);
router.route('/url/:urlID').get(loadShortURL);

export default router;
