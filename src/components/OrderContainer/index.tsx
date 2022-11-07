import React from 'react'
import styles from './Order.module.css';

import { Order } from '../../types';
import OrderCard from '../OrderCard';

interface OrderContainerProps {
    item: Order
}

const OrderContainer: React.FC<OrderContainerProps> = ({ item }) => {
    return (
        <div className={styles.orderContainer}>
            <h1>{item.index}</h1>
            <hr />
            <div className={styles.orderItems}>
                {item.items.map(card => <OrderCard key={card.id} title={card.title} price={card.price} imageURL={card.imageURL} />)}
            </div>
        </div>
    )
}

export default OrderContainer;