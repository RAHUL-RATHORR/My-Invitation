import type { Metadata } from "next";
import TemplatesGallery from "@/app/templates/TemplatesGallery";

export const metadata: Metadata = {
  title: "All Invitation Templates | My Invitation",
  description: "Browse premium digital wedding invitation templates — royal, floral, minimal, festive and more. Live preview every design and order on WhatsApp.",
};

export default function TemplatesPage() {
  return <TemplatesGallery />;
}
