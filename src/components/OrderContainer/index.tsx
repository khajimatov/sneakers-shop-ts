import React from 'react'
import styles from './Order.module.css';

import { Order } from '../../types';
import OrderCard from '../OrderCard';
import Tag from '../Tag';

interface OrderContainerProps {
    item: Order
}

const OrderContainer: React.FC<OrderContainerProps> = ({ item }) => {
    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderHeader}>
                <h1>#{item.index}</h1>
                <div className={styles.orderTags}>
                    {<Tag text={item.buyer} />}
                    {<Tag text={item.orderPrice.toString()} />}
                </div>
            </div>
            <h4>Purchased sneakers:</h4>
            <div className={styles.orderItems}>
                {item.items.map(card => <OrderCard key={card.id} title={card.title} price={card.price} imageURL={card.imageURL} />)}
            </div>
        </div>
    )
}

export default OrderContainer;