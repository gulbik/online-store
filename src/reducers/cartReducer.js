export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.findIndex(item =>
                item.id === action.payload.id &&
                item.selectedColor &&
                action.payload.selectedColor &&
                item.selectedColor.colorName === action.payload.selectedColor.colorName
            );
            if (existingProductIndex !== -1) {
                const newCart = [...state];
                newCart[existingProductIndex].quantity += 1;
                return newCart;
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
            
        case 'REMOVE_FROM_CART':
            return state.filter(item =>
                `${item.id} - ${item.selectedColor ? item.selectedColor.colorName : 'default'}` !== action.payload
            ); 

        case 'UPDATE_CART_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id &&
                    (item.selectedColor ? item.selectedColor.colorName === action.payload.selectedColor.colorName : true)
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        default:
            return state;
    }
};

