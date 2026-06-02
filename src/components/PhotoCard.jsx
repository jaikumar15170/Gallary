import React from 'react'

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative overflow-hidden bg-gray-100">
                <img
                    src={`https://picsum.photos/300/300?random=${photo.id}`}
                    alt={photo.author}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <p className="text-gray-700 font-medium truncate">{photo.author}</p>
                <button
                    onClick={() => onToggleFavorite(photo.id)}
                    className={`mt-3 w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${isFavorite
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
                </button>
            </div>
        </div>
    )
}

export default PhotoCard
