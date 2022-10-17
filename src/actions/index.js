const beveragesLoaded = (newBeverages) => {
    return {
        type: 'BEVERAGES_LOADED',
        payload: newBeverages
    }
}

const nutsLoaded = (newNuts) => {
    return {
        type: 'NUTS_LOADED',
        payload: newNuts
    }
}



const addedBeveragesInCart = (id) => {
    return {
        type: 'ADDED_BEVERAGES_IN_CART',
        payload: id
    }
}

const removeBeveragesInCart = (id) => {
    return {
        type: 'REMOVE_BEVERAGES_IN_CART',
        payload: id
    }
}

export  {beveragesLoaded, addedBeveragesInCart,removeBeveragesInCart,nutsLoaded};