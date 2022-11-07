import { SET_ITEMS, SET_FAVORITES, ADD_TO_CART, ADD_TO_FAVORITES, SET_ORDERS, ADD_TO_ORDERS, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES, SET_CART } from "./actionTypes";

interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}

interface Action {
    type: string,
    item: Item,
    items: Item[],
    orders: Order[]
}

interface Order {
    index: string,
    items: Item[]
}
interface IState {
    items: Item[],
    cart: Item[],
    favorites: Item[],
    orders: Order[]
}

const initialState: IState = {
    items: [],
    cart: [],
    favorites: [],
    orders: []
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, items: action.items }
        case SET_CART:
            return { ...state, cart: action.items }
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.item] }
        case SET_FAVORITES:
            return { ...state, favorites: action.items }
        case ADD_TO_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.item] }
        case SET_ORDERS:
            return { ...state, orders: action.orders }
        case ADD_TO_ORDERS:
            let newIndex: string = state.orders.length.toString();
            let newOrder: Order = { "index": newIndex, "items": action.items };
            return { ...state, orders: [...state.orders, newOrder] }
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(obj => obj.id !== action.item!.id) }
        case REMOVE_FROM_FAVORITES:
            return { ...state, favorites: state.favorites.filter(obj => obj.id !== action.item!.id) }
        default:
            return state;
    }
}

export default reducer;