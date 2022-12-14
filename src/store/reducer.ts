import { SET_ITEMS, SET_TOAST, REMOVE_TOAST, SET_URL_PARAMS, SET_FAVORITES, ADD_TO_CART, ADD_TO_FAVORITES, SET_ORDERS, ADD_TO_ORDERS, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES, SET_CART, CLEAR_CART, SET_ORDER_PRICE } from "./actionTypes";
import { IState, Action } from "../types";
const initialState: IState = {
    items: [],
    cart: [],
    favorites: [],
    orders: [],
    modal: false,
    orderPrice: 0,
    URLParams: '',
    toastText: ''
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_ORDER_PRICE:
            return { ...state, orderPrice: action.orderPrice }
        case SET_TOAST:
            return { ...state, toastText: action.toastText }
        case REMOVE_TOAST:
            return { ...state, toastText: action.toastText }
        case SET_URL_PARAMS:
            return { ...state, URLParams: action.URLParams }
        case SET_ITEMS:
            return { ...state, items: action.items }
        case SET_CART:
            return { ...state, cart: action.items }
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.item] }
        case CLEAR_CART:
            return { ...state, cart: [] }
        case SET_FAVORITES:
            return { ...state, favorites: action.items }
        case ADD_TO_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.item] }
        case SET_ORDERS:
            return { ...state, orders: action.orders }
        case ADD_TO_ORDERS:
            return { ...state, orders: [...state.orders, action.order] }
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(obj => obj.id !== action.item!.id) }
        case REMOVE_FROM_FAVORITES:
            return { ...state, favorites: state.favorites.filter(obj => obj.id !== action.item!.id) }
        default:
            return state;
    }
}

export default reducer;