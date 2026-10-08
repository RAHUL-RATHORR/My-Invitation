import { use } from "react";
import RoyalGates from "@/components/templates/RoyalGates";
import CelestialNight from "@/components/templates/CelestialNight";
import FloralWatercolor from "@/components/templates/FloralWatercolor";

export const dynamic = "force-dynamic";

// Mock database simulation for different slugs
const MOCK_DB: Record<string, any> = {
  "aarav-weds-meera": {
    slug: "aarav-weds-meera",
    theme: "royal-gates",
    couple: { partner1Name: "Aarav", partner2Name: "Meera", story: "Two souls, one beautiful journey." },
    events: [
      { title: "Mehendi", date: "Oct 24, 2026", time: "4:00 PM", venue: "The Grand Taj", address: "Mumbai, India", mapLink: "#" },
      { title: "Wedding", date: "Oct 25, 2026", time: "6:00 PM", venue: "The Grand Taj", address: "Mumbai, India", mapLink: "#" }
    ]
  },
  "vikram-weds-anjali": {
    slug: "vikram-weds-anjali",
    theme: "celestial-night",
    couple: { partner1Name: "Vikram", partner2Name: "Anjali", story: "Written in the stars, bound by love." },
    events: [
      { title: "Sangeet", date: "Nov 12, 2026", time: "7:00 PM", venue: "Starlight Resort", address: "Goa, India", mapLink: "#" },
      { title: "Wedding", date: "Nov 13, 2026", time: "5:00 PM", venue: "Starlight Resort", address: "Goa, India", mapLink: "#" }
    ]
  },
  "rohan-weds-priya": {
    slug: "rohan-weds-priya",
    theme: "floral-watercolor",
    couple: { partner1Name: "Rohan", partner2Name: "Priya", story: "A blooming love that lasts a lifetime." },
    events: [
      { title: "Haldi", date: "Dec 05, 2026", time: "10:00 AM", venue: "The Royal Gardens", address: "Jaipur, India", mapLink: "#" },
      { title: "Wedding", date: "Dec 06, 2026", time: "6:00 PM", venue: "The Royal Palace", address: "Jaipur, India", mapLink: "#" }
    ]
  }
};

export default function InvitationDynamicRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = MOCK_DB[slug] || MOCK_DB["aarav-weds-meera"]; // Fallback for testing

  if (!data) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // Render the correct template based on the theme
  switch (data.theme) {
    case "celestial-night":
      return <CelestialNight data={data} />;
    case "floral-watercolor":
      return <FloralWatercolor data={data} />;
    case "royal-gates":
    default:
      return <RoyalGates data={data} />;
  }
}
