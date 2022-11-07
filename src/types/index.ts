export interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}
export interface Order {
    index: string,
    items: Item[]
}

export interface Action {
    type: string,
    item: Item,
    items: Item[],
    orders: Order[]
}

export interface IState {
    items: Item[],
    cart: Item[],
    favorites: Item[],
    orders: Order[]
}