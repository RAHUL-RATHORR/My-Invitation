import mongoose, { Schema, Document } from 'mongoose';

export interface IRSVP extends Document {
  invitationId: mongoose.Types.ObjectId;
  guestName: string;
  phone: string;
  attending: 'yes' | 'no' | 'maybe';
  numberOfGuests: number;
  eventsAttending: string[]; // e.g., ['Mehendi', 'Wedding']
  message?: string;
  createdAt: Date;
}

const RSVPSchema: Schema = new Schema(
  {
    invitationId: { type: Schema.Types.ObjectId, ref: 'Invitation', required: true },
    guestName: { type: String, required: true },
    phone: { type: String, required: true },
    attending: { type: String, enum: ['yes', 'no', 'maybe'], required: true },
    numberOfGuests: { type: Number, required: true, min: 1, default: 1 },
    eventsAttending: [{ type: String }],
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IRSVP>('RSVP', RSVPSchema);
