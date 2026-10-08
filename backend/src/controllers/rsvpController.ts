import { Request, Response } from 'express';
import RSVP from '../models/RSVP';
import Invitation from '../models/Invitation';

export const submitRSVP = async (req: Request, res: Response): Promise<void> => {
  try {
    const { invitationId, guestName, phone, attending, numberOfGuests, eventsAttending, message } = req.body;

    // Optional: Verify the invitation exists
    // const invitation = await Invitation.findOne({ slug: invitationId });
    // if (!invitation) { res.status(404).json({ error: 'Invitation not found' }); return; }

    const newRSVP = new RSVP({
      invitationId, // Note: In this quick mock, we're using the slug as the ID directly for simplicity
      guestName,
      phone,
      attending,
      numberOfGuests,
      eventsAttending,
      message,
    });

    await newRSVP.save();
    res.status(201).json({ success: true, data: newRSVP });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getRSVPs = async (req: Request, res: Response): Promise<void> => {
  try {
    const { invitationId } = req.params;
    const rsvps = await RSVP.find({ invitationId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: rsvps });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
