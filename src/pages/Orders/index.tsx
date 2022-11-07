import React, { useEffect } from 'react';

import styles from './Orders.module.css';

import Empty from '../../components/Empty';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../..';
import axios from 'axios';
import { setOrders } from '../../store/actions';
import { Order } from '../../types';
import OrderContainer from '../../components/OrderContainer';

const Orders: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        (async function fetchItems() {
            const ordersResponse = await axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/orders');
            dispatch(setOrders(ordersResponse.data));
        }())
    }, [dispatch])

    const orders = useAppSelector((state: RootState) => state.orders);

    const renderItems = () => {
        return orders.length > 0 ? orders.map((item: Order) =>
            <>
                <OrderContainer key={item.index} item={item} />
                <br />
                <hr />
                <br />
            </>
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