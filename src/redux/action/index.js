// for Add item to Cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// for delete Add item from Cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}