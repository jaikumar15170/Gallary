export const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE': {
            const photoId = action.payload
            const isFavorite = state.includes(photoId)

            if (isFavorite) {
                return state.filter(id => id !== photoId)
            } else {
                return [...state, photoId]
            }
        }
        case 'LOAD_FAVORITES':
            return action.payload
        default:
            return state
    }
}
