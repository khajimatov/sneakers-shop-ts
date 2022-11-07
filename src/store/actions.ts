import { ADD_TO_CART, ADD_TO_FAVORITES, ADD_TO_ORDERS, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from "./actionTypes";
import { ThunkAction } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import axios from "axios";


interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}

export const addToCart = (value: Item) => {
    return { type: ADD_TO_CART, item: value };
}
export const addToFavorites = (value: Item) => {
    return { type: ADD_TO_FAVORITES, item: value };
}
export const addToOrders = (value: Item) => {
    return { type: ADD_TO_ORDERS, item: value };
}
export const removeFromCart = (value: Item) => {
    return { type: REMOVE_FROM_CART, item: value };
}
export const removeFromFavorites = (value: Item) => {
    return { type: REMOVE_FROM_FAVORITES, item: value };
}

export const postToCart =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            await axios.post('https://611a826e5710ca00173a1a6e.mockapi.io/cart', thisCard);
            dispatch(addToCart(thisCard));
        }
export const postToFavorites =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            await axios.post('https://611a826e5710ca00173a1a6e.mockapi.io/favorites', thisCard);
            dispatch(addToFavorites(thisCard));
        }