import { SET_ITEMS, SET_CART, SET_FAVORITES, ADD_TO_CART, ADD_TO_FAVORITES, SET_ORDERS, ADD_TO_ORDERS, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from "./actionTypes";
import { ThunkAction } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Item, Order } from '../types';
import axios from "axios";

export const setItems = (value: Item[]) => {
    return { type: SET_ITEMS, items: value };
}
export const setCart = (value: Item[]) => {
    return { type: SET_CART, items: value };
}
export const addToCart = (value: Item) => {
    return { type: ADD_TO_CART, item: value };
}
export const setFavorites = (value: Item[]) => {
    return { type: SET_FAVORITES, items: value };
}
export const addToFavorites = (value: Item) => {
    return { type: ADD_TO_FAVORITES, item: value };
}
export const setOrders = (value: Order[]) => {
    return { type: SET_ORDERS, orders: value };
}
export const addToOrders = (value: Item[]) => {
    return { type: ADD_TO_ORDERS, items: value };
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
export const deleteFromCart =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/cart?id=${thisCard.id}`);
            await axios.delete(`https://611a826e5710ca00173a1a6e.mockapi.io/cart/${data[0].index}`);
            dispatch(removeFromCart(thisCard));
        }
export const postToFavorites =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            await axios.post('https://611a826e5710ca00173a1a6e.mockapi.io/favorites', thisCard);
            dispatch(addToFavorites(thisCard));
        }
export const deleteFromFavorites =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/favorites?id=${thisCard.id}`);
            await axios.delete(`https://611a826e5710ca00173a1a6e.mockapi.io/favorites/${data[0].index}`);
            dispatch(removeFromFavorites(thisCard));
        }