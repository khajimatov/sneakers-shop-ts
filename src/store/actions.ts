import { SET_ITEMS, SET_CART, SET_FAVORITES, ADD_TO_CART, CLEAR_CART, ADD_TO_FAVORITES, SET_ORDERS, ADD_TO_ORDERS, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES, SET_ORDER_PRICE } from "./actionTypes";
import { ThunkAction } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Item, Order } from '../types';
import axios from "axios";

export const setOrderPrice = (value: number) => {
    return { type: SET_ORDER_PRICE, orderPrice: value };
}
export const setItems = (value: Item[]) => {
    return { type: SET_ITEMS, items: value };
}
export const setCart = (value: Item[]) => {
    return { type: SET_CART, items: value };
}
export const addToCart = (value: Item) => {
    return { type: ADD_TO_CART, item: value };
}
export const clearCart = () => {
    return { type: CLEAR_CART };
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
export const addToOrders = (value: Order) => {
    return { type: ADD_TO_ORDERS, order: value };
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
            try {
                await axios.post('https://611a826e5710ca00173a1a6e.mockapi.io/cart', thisCard);
                dispatch(addToCart(thisCard));
            }
            catch (error) {
                if (error) {
                    if (axios.isAxiosError(error)) {
                        switch (error.response?.status) {
                            case 429:
                                alert(error.response.data);
                                break;
                            default:
                                alert(error.response?.data)
                                break;
                        }
                    }
                    else {
                        alert('Unexpected error: ' + error);
                    }
                }
            }
        }
export const deleteFromCart =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            try {
                const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/cart?id=${thisCard.id}`);
                await axios.delete(`https://611a826e5710ca00173a1a6e.mockapi.io/cart/${data[0].index}`);
                dispatch(removeFromCart(thisCard));
            }
            catch (error) {
                if (error) {
                    if (axios.isAxiosError(error)) {
                        switch (error.response?.status) {
                            case 429:
                                alert(error.response.data);
                                break;
                            default:
                                alert(error.response?.data)
                                break;
                        }
                    }
                    else {
                        alert('Unexpected error: ' + error);
                    }
                }
            }
        }
export const postToFavorites =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            try {
                await axios.post('https://611a826e5710ca00173a1a6e.mockapi.io/favorites', thisCard);
                dispatch(addToFavorites(thisCard));
            }
            catch (error) {
                if (error) {
                    if (axios.isAxiosError(error)) {
                        switch (error.response?.status) {
                            case 429:
                                alert(error.response.data);
                                break;
                            default:
                                alert(error.response?.data)
                                break;
                        }
                    }
                    else {
                        alert('Unexpected error: ' + error);
                    }
                }
            }
        }
export const deleteFromFavorites =
    (thisCard: Item): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            try {
                const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/favorites?id=${thisCard.id}`);
                await axios.delete(`https://611a826e5710ca00173a1a6e.mockapi.io/favorites/${data[0].index}`);
                dispatch(removeFromFavorites(thisCard));
            }
            catch (error) {
                if (error) {
                    if (axios.isAxiosError(error)) {
                        switch (error.response?.status) {
                            case 429:
                                alert(error.response.data);
                                break;
                            default:
                                alert(error.response?.data)
                                break;
                        }
                    }
                    else {
                        alert('Unexpected error: ' + error);
                    }
                }
            }
        }
export const postToOrders =
    (order: Order): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            try {
                await axios.post('https://611a826e5710ca00173a1a6e.mockapi.io/orders', order);
                dispatch(addToOrders(order));
                const promises = order.items.map(item => dispatch(deleteFromCart(item)));
                await Promise.all(promises);
                dispatch(clearCart());
            }
            catch (error) {
                if (error) {
                    if (axios.isAxiosError(error)) {
                        switch (error.response?.status) {
                            case 429:
                                alert(error.response.data);
                                break;
                            default:
                                alert(error.response?.data)
                                break;
                        }
                    }
                    else {
                        alert('Unexpected error: ' + error);
                    }
                }
            }
        }
export const setSorting =
    (sortingType: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            try {
                if (sortingType === 'high') {
                    const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/items?sortby=price&order=desc&p=1&l=8`)
                    dispatch(setItems(data));
                } else if (sortingType === 'low') {
                    const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/items?sortby=price&p=1&l=8`)
                    dispatch(setItems(data));
                } else if (sortingType === 'sort') {
                    const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/items?p=1&l=8`)
                    dispatch(setItems(data));
                }
            }
            catch (error) {
                if (error) {
                    if (axios.isAxiosError(error)) {
                        alert(error.code)
                    }
                }
                else {
                    alert('Unexpected error: ' + error);
                }
            }
        }
export const paginate =
    (URLParams: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
        async dispatch => {
            try {
                const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/items?${URLParams}`);
                dispatch(setItems(data));
            }
            catch (error) {
                if (error) {
                    if (axios.isAxiosError(error)) {
                        alert(error.code)
                    }
                }
                else {
                    alert('Unexpected error: ' + error);
                }
            }
        }
