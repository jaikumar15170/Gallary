# Photo Gallery Web App

A responsive photo gallery built with React, Vite, and Tailwind CSS. Features real-time search filtering, favorite management with useReducer, and localStorage persistence.

## Features

- ✨ Fetch photos from Picsum Photos API
- 🔍 Real-time search filter by author name
- ❤️ Mark photos as favorites with useReducer
- 💾 Persistent favorites using localStorage
- 📱 Responsive grid (4 columns desktop, 2 columns tablet, 1 column mobile)
- ⚡ Performance optimized with useCallback and useMemo
- 🎨 Beautiful UI built with Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── Gallery.jsx        # Main gallery component
│   ├── PhotoCard.jsx      # Individual photo card component
│   └── SearchBar.jsx      # Search input component
├── hooks/
│   └── useFetchPhotos.js  # Custom hook for API fetching
├── reducers/
│   └── favoritesReducer.js # useReducer logic for favorites
├── App.jsx
├── main.jsx
└── index.css
```

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
npm run preview
```

## Technical Highlights

### Custom Hook - useFetchPhotos
Handles all API fetching logic and returns `{ photos, loading, error }` state.

### useReducer for Favorites
Manages favorite state with TOGGLE_FAVORITE and LOAD_FAVORITES actions. Favorites persist to localStorage.

### Performance Optimization
- `useCallback` optimizes the search handler to prevent unnecessary re-renders
- `useMemo` computes filtered photos list only when dependencies change

### Responsive Design
- Desktop: 4-column grid
- Tablet (md): 2-column grid
- Mobile: 1-column grid

## Requirements Met

✅ React + Vite project with Tailwind CSS
✅ Fetch 30 photos from Picsum Photos API
✅ Loading spinner and error handling
✅ Responsive grid layout
✅ Real-time search by author name
✅ useReducer for favorites management
✅ Custom useFetchPhotos hook
✅ useCallback for search handler
✅ useMemo for filtered photos
✅ localStorage persistence
✅ No component libraries (Tailwind only)
✅ Functional components with hooks only
"# Gallary" 
