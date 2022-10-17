const initialState = {
    beverages: [],
    nuts: [],
    cartItems: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEVERAGES_LOADED':
            return {
                ...state,
                beverages: action.payload
            };
        case 'NUTS_LOADED':
            return {
                ...state,
                nuts: action.payload
            };
        case 'ADDED_BEVERAGES_IN_CART':
            return updatingCart(state, action, 1)
        case 'REMOVE_BEVERAGES_IN_CART':
            return updatingCart(state, action, -1)
        default:
            return state
    }
}

const updatingCart = (state, action, amount) => {
    const beverageId = action.payload;
    const link = window.location.href.slice(22, -1) + 's';
    let beverage = [];
    // const arr = [beverages, nuts]
    if(link === 'beverages' || link === 'shoppingCars'){
        beverage = state.beverages.find(item => beverageId === item.id);
    }else if(link === 'nuts' || link === 'shoppingCars'){
        beverage = state.nuts.find(item => beverageId === item.id)}

    const newItem = {
        id: beverage.id,
        name: beverage.title,
        count: 1,
        total: beverage.price
    }


    console.log(link)
    state.totalPrice += beverage.price * amount;
    const beverageInCart = state.cartItems.find(item => item.id === beverageId);

    if (beverageInCart) {
        const cartItems = state.cartItems.map(item => {
            if (item.id === beverageId) {
                item.count += amount;
                item.total += beverage.price * amount
            }
            return item;
        })
        if (!beverageInCart.count) {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== beverageId)
            }
        }
        return {
            ...state,
            cartItems
        }
    }

    return {
        ...state,
        // cartItems: cartItems
        cartItems: state.cartItems.concat(newItem)
    }
// }

}

export default reducer;