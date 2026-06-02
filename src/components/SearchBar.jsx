import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="w-full mb-8">
            <input
                type="text"
                placeholder="Search by author name..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
        </div>
    )
}

export default SearchBar
