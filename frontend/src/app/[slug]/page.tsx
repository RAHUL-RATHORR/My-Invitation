import { use } from "react";
import RoyalGates from "@/components/templates/RoyalGates";
import CelestialNight from "@/components/templates/CelestialNight";
import FloralWatercolor from "@/components/templates/FloralWatercolor";
import EmeraldMughal from "@/components/templates/EmeraldMughal";
import IvoryMinimal from "@/components/templates/IvoryMinimal";
import HaldiSunshine from "@/components/templates/HaldiSunshine";

export const instant = false;

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
  },
  "arjun-weds-kavya": {
    slug: "arjun-weds-kavya",
    theme: "emerald-mughal",
    couple: { partner1Name: "Arjun", partner2Name: "Kavya", story: "Under royal arches, two hearts become one." },
    events: [
      { title: "Sangeet", date: "Jan 18, 2027", time: "7:30 PM", venue: "Umaid Bhawan Palace", address: "Jodhpur, India", mapLink: "#" },
      { title: "Wedding", date: "Jan 19, 2027", time: "8:00 PM", venue: "Umaid Bhawan Palace", address: "Jodhpur, India", mapLink: "#" }
    ]
  },
  "karan-weds-sneha": {
    slug: "karan-weds-sneha",
    theme: "ivory-minimal",
    couple: { partner1Name: "Karan", partner2Name: "Sneha", story: "Simple moments, timeless love. Join us as we begin forever." },
    events: [
      { title: "Ceremony", date: "Feb 14, 2027", time: "11:00 AM", venue: "The Leela Palace", address: "Bengaluru, India", mapLink: "#" },
      { title: "Reception", date: "Feb 14, 2027", time: "7:00 PM", venue: "The Leela Palace", address: "Bengaluru, India", mapLink: "#" }
    ]
  },
  "dev-weds-isha": {
    slug: "dev-weds-isha",
    theme: "haldi-sunshine",
    couple: { partner1Name: "Dev", partner2Name: "Isha", story: "Sunshine, marigolds and a lifetime of laughter." },
    events: [
      { title: "Haldi", date: "Mar 03, 2027", time: "10:00 AM", venue: "Sunflower Lawns", address: "Ahmedabad, India", mapLink: "#" },
      { title: "Mehendi", date: "Mar 03, 2027", time: "5:00 PM", venue: "Sunflower Lawns", address: "Ahmedabad, India", mapLink: "#" },
      { title: "Wedding", date: "Mar 04, 2027", time: "7:00 PM", venue: "Hyatt Regency", address: "Ahmedabad, India", mapLink: "#" }
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
    case "emerald-mughal":
      return <EmeraldMughal data={data} />;
    case "ivory-minimal":
      return <IvoryMinimal data={data} />;
    case "haldi-sunshine":
      return <HaldiSunshine data={data} />;
    case "royal-gates":
    default:
      return <RoyalGates data={data} />;
  }
}
