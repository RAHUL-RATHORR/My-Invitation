import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapLink: string;
}

export interface IInvitation extends Document {
  slug: string;
  theme: string; // e.g., 'royal-gates', 'celestial-night', 'floral-watercolor'
  couple: {
    partner1Name: string;
    partner2Name: string;
    story?: string;
  };
  events: IEvent[];
  photos: string[];
  musicUrl?: string;
  language?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  address: { type: String, required: true },
  mapLink: { type: String },
});

const InvitationSchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    theme: { type: String, required: true, default: 'royal-gates' },
    couple: {
      partner1Name: { type: String, required: true },
      partner2Name: { type: String, required: true },
      story: { type: String },
    },
    events: [EventSchema],
    photos: [{ type: String }],
    musicUrl: { type: String },
    language: { type: String, default: 'English' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IInvitation>('Invitation', InvitationSchema);
