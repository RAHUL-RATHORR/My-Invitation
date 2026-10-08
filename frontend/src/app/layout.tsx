import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "My Invitation | Premium Digital Wedding Invitations",
  description: "Create stunning, cinematic, and premium digital wedding invitations for your Indian wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} ${greatVibes.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
