import { ADD_TO_CART, ADD_TO_FAVORITES, ADD_TO_ORDERS, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from "./actionTypes";

interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}

interface Action {
    type: string,
    item: Item
}

interface IState {
    items: Item[],
    cart: Item[],
    favorites: Item[],
    orders: Item[]
}

const initialState: IState = {
    items: [],
    cart: [],
    favorites: [],
    orders: []
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, items: [...state.items, action.item] }
        case ADD_TO_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.item] }
        default:
            return state;
    }
}

export default reducer;