"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// RSVP Validation Schema
const rsvpSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  attending: z.enum(["yes", "no", "maybe"], {
    required_error: "Please let us know if you can make it",
  }),
  numberOfGuests: z.number().min(1).max(10),
  eventsAttending: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type RSVPFormValues = z.infer<typeof rsvpSchema>;

export default function RSVPForm({ events, invitationId }: { events: string[], invitationId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      numberOfGuests: 1,
      eventsAttending: [],
    }
  });

  const onSubmit = async (data: RSVPFormValues) => {
    setIsSubmitting(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/rsvp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invitationId, ...data }),
      });
      
      if (!response.ok) throw new Error("Failed to submit RSVP");
      
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-8 text-center rounded-2xl border-primary/20"
      >
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-3xl font-heading text-secondary mb-2">Thank You!</h3>
        <p className="text-foreground/80">Your RSVP has been successfully received.</p>
      </motion.div>
    );
  }

  return (
    <div className="glass p-8 rounded-2xl border-primary/20 max-w-2xl mx-auto">
      <h3 className="text-4xl font-heading text-secondary text-center mb-8">RSVP</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Full Name *</label>
            <input 
              {...register("guestName")}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Enter your name"
            />
            {errors.guestName && <p className="text-red-500 text-xs">{errors.guestName.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Phone Number *</label>
            <input 
              {...register("phone")}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Enter WhatsApp number"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Will you attend? *</label>
          <div className="grid grid-cols-3 gap-4">
            {["yes", "no", "maybe"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer p-3 border border-border rounded-lg hover:border-primary/50 transition-all">
                <input type="radio" value={opt} {...register("attending")} className="text-primary focus:ring-primary" />
                <span className="capitalize">{opt}</span>
              </label>
            ))}
          </div>
          {errors.attending && <p className="text-red-500 text-xs">{errors.attending.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Which events will you attend?</label>
          <div className="grid grid-cols-2 gap-4">
            {events.map((event) => (
              <label key={event} className="flex items-center gap-2 cursor-pointer p-3 border border-border rounded-lg hover:border-primary/50 transition-all">
                <input type="checkbox" value={event} {...register("eventsAttending")} className="text-primary focus:ring-primary rounded" />
                <span>{event}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Message for the Couple (Optional)</label>
          <textarea 
            {...register("message")}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Share your wishes..."
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting || !isValid}
          className="w-full bg-secondary text-secondary-foreground py-4 rounded-lg font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Send RSVP"}
        </button>
      </form>
    </div>
  );
}
