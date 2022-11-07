import React from 'react'
import Card from '../Card';
import styles from './Order.module.css';

import { Order } from '../../types';

interface OrderContainerProps {
    item: Order
}

const OrderContainer = ({ item }: OrderContainerProps) => {
    return (
        <div className={styles.orderContainer}>
            <h1>{item.index}</h1>
            <hr />
            <div className={styles.orderItems}>
                {item.items.map(card => <Card key={card.id} id={card.id} title={card.title} price={card.price} imageURL={card.imageURL} />)}
            </div>
        </div>
    )
}

export default OrderContainer;