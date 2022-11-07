import React, { useEffect } from 'react';

import styles from './Orders.module.css';

import Empty from '../../components/Empty';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../..';
import axios from 'axios';
import Card from '../../components/Card';
import { setOrders } from '../../store/actions';


interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}
interface Order {
    index: string,
    items: Item[]
}


const Orders: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        (async function fetchItems() {
            const ordersResponse = await axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/orders');
            dispatch(setOrders(ordersResponse.data));
        }())
    }, [])

    const orders = useAppSelector((state: RootState) => state.orders);

    const renderItems = () => {
        return orders.length > 0 ? orders.map((item: Order) =>
            <div className={styles.order}>
                <h1>{item.index}</h1>
                <hr />
                <div className={styles.orderItems}>
                    {item.items.map(card => <Card key={card.id} id={card.id} title={card.title} price={card.price} imageURL={card.imageURL} />)}
                </div>
            </div>
        ) : <Empty title='Favorites are empty' />
    }
    return (
        <div className={styles.orders}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Orders</h1>
            </div>
            <div className={styles.container}>
                {renderItems()}
            </div>
        </div>
    )
}

export default Orders;