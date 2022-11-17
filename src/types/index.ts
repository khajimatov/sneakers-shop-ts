export interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}
export interface Address {
    city: string,
    street: string,
    home: string
}
export interface Order {
    index: string,
    buyer: string,
    date: number,
    address: Address,
    orderPrice: number,
    items: Item[]
}
export interface Action {
    type: string,
    item: Item,
    items: Item[],
    orders: Order[],
    order: Order,
    orderPrice: number,
    URLParams: string
}

export interface IState {
    items: Item[],
    cart: Item[],
    favorites: Item[],
    orders: Order[],
    modal: boolean,
    orderPrice: number,
    URLParams: string
}