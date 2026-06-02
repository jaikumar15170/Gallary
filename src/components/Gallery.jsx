import React, { useState, useReducer, useEffect, useCallback, useMemo } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import { favoritesReducer } from '../reducers/favoritesReducer'
import SearchBar from './SearchBar'
import PhotoCard from './PhotoCard'

const Gallery = () => {
    const { photos, loading, error } = useFetchPhotos()

    // Initialize favorites from localStorage
    const [favorites, dispatch] = useReducer(
        favoritesReducer,
        [],
        (initialValue) => {
            const savedFavorites = localStorage.getItem('favorites')
            return savedFavorites ? JSON.parse(savedFavorites) : initialValue
        }
    )
    const [searchTerm, setSearchTerm] = useState('')

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // useCallback for the search handler
    const handleSearchChange = useCallback((value) => {
        setSearchTerm(value)
    }, [])

    // useCallback for toggle favorite
    const handleToggleFavorite = useCallback((photoId) => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId })
    }, [])

    // useMemo for filtered photos
    const filteredPhotos = useMemo(() => {
        if (!searchTerm.trim()) {
            return photos
        }
        return photos.filter(photo =>
            photo.author.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [photos, searchTerm])

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-red-50 border border-red-300 rounded-lg p-6 max-w-md">
                    <h2 className="text-red-800 font-semibold text-lg mb-2">Error Loading Photos</h2>
                    <p className="text-red-700">{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Photo Gallery</h1>
                    <p className="text-gray-600">Explore and save your favorite photos</p>
                </div>

                {/* Search Bar */}
                <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

                {/* Loading State */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : (
                    <>
                        {/* Results Count */}
                        <div className="mb-6 text-gray-600">
                            Showing {filteredPhotos.length} of {photos.length} photos
                        </div>

                        {/* Grid */}
                        {filteredPhotos.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredPhotos.map(photo => (
                                    <PhotoCard
                                        key={photo.id}
                                        photo={photo}
                                        isFavorite={favorites.includes(photo.id)}
                                        onToggleFavorite={handleToggleFavorite}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-gray-500">No photos found matching "{searchTerm}"</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Gallery
