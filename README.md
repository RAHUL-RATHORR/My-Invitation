# My Invitation Platform

A premium digital wedding invitation website builder for Indian weddings.

## Project Structure
- `/frontend`: Next.js 14 App Router, Tailwind CSS v4, Framer Motion, GSAP, Zod, React-Hook-Form.
- `/backend`: Node.js, Express, TypeScript, Mongoose (MongoDB).

## How to Run Locally

### 1. Start the Backend API
You will need a local instance of MongoDB running on port `27017` (or change the `MONGODB_URI` in `backend/.env`).
```bash
cd backend
npm install
npx ts-node src/server.ts
```
The API will run on `http://localhost:5000`.

### 2. Start the Frontend Next.js App
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:3000`.

## Features Built
- **Design System**: Luxurious deep maroon and gold palette, typography setup in Next.js (Playfair Display, Poppins, Great Vibes).
- **Cinematic Homepage**: Uses Framer Motion and GSAP for beautiful landing page animations.
- **Dynamic Template Engine**: Found at `/frontend/src/app/[slug]/page.tsx`, this engine renders any invitation theme. Currently features the "Royal Gates" interactive open animation.
- **RSVP System**: Fully functional, validated RSVP form integrated with the Next.js frontend and Express backend.

## Deployment Strategy
- **Frontend (Vercel)**: Connect the repository to Vercel. Set build command to `npm run build` and output directory to `.next`. 
- **Backend (Render / Railway)**: Deploy the Express server using Node.js. Provide the `MONGODB_URI` environment variable linking to a MongoDB Atlas cluster.
- **Database (MongoDB Atlas)**: Host the production database on MongoDB Atlas.

# My-Invitation
