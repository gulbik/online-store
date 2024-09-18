export const otherInitialState = {
    maxPrice: '',
    sortCriteria: '',
    filterColors: [],
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    searchQuery: '',
};

export const otherReducer = (state = otherInitialState, action) => {
    switch (action.type) {
        case 'SET_MAX_PRICE':
            return { ...state, maxPrice: action.payload };
        case 'SET_SORT_CRITERIA':
            return { ...state, sortCriteria: action.payload };
        case 'SET_FILTER_COLORS':
            return { ...state, filterColors: action.payload };
        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};