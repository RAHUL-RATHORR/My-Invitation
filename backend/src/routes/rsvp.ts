import express from 'express';
import { submitRSVP, getRSVPs } from '../controllers/rsvpController';

const router = express.Router();

router.post('/', submitRSVP);
router.get('/:invitationId', getRSVPs); // In a real app, this should be protected

export default router;
