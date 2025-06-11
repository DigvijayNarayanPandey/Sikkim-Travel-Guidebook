# Sikkim Travel Guidebook Frontend

This is the frontend application for the Sikkim Travel Guidebook project.

## Prerequisites

- Node.js (version 14.0.0 or higher)
- npm (comes with Node.js)

## Setup Instructions

1. Clone the repository:
bash
git clone <repository-url>
cd Frontend


2. Install dependencies:
bash
npm install


3. Start the development server:
bash
npm run dev


The application will be available at http://localhost:5173

## Project Structure

- src/ - Source code
  - assets/ - Images and other static assets
  - components/ - Reusable React components
  - pages/ - Page components
  - App.jsx - Main application component
  - main.jsx - Application entry point

## Available Scripts

- npm run dev - Start development server
- npm run build - Build for production
- npm run preview - Preview production build
- npm run lint - Run ESLint

## Dependencies

- React
- React DOM
- React Responsive Carousel
- Vite (Build tool)

## Notes

- Make sure all image assets are present in the src/assets directory
- The carousel component requires the following images:
  - Slide1.jpg
  - Slide2.jpg
  - Slide3.jpg
  - Slide4.jpg
  - Slide5.jpg

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled.
Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [typescript-eslint](https://typescript-eslint.io) in your project.
