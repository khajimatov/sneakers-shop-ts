import { ADD_TO_CART, ADD_TO_FAVORITES, ADD_TO_ORDERS, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from "./actionTypes";

export const addToCart = (value) => {
    return { type: ADD_TO_CART, value: value };
}
export const addToFavorites = () => {
    return { type: ADD_TO_FAVORITES };
}
export const addToOrders = () => {
    return { type: ADD_TO_ORDERS };
}
export const removeFromCart = () => {
    return { type: REMOVE_FROM_CART };
}
export const removeFromFavorites = () => {
    return { type: REMOVE_FROM_FAVORITES };
}