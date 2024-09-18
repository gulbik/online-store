
export const favouritesInitialState = JSON.parse(localStorage.getItem('favourites')) || [];

export const favouritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return !state.find(item => item.id === action.payload.id)
                ? [...state, action.payload]
                : state;
        case 'REMOVE_FROM_FAVOURITES':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};
