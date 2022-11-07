import React from 'react'
import styles from './OrderContainer.module.css';

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
                    {<Tag text={'Buyer: ' + item.buyer} />}
                    {<Tag text={'Order Cost: $' + item.orderPrice.toString() + ' USD'} />}
                    {
                        <Tag text={'Date: ' + new Date(item.date).toLocaleDateString()} />
                    }
                    {<Tag text={'Address: ' + item.address.city + ', ' + item.address.street + ', ' + item.address.home} />}
                </div>
            </div>
            <h4>Purchased sneakers:</h4>
            <div className={styles.orderItems}>
                {item.items.map(card => <OrderCard key={card.id} title={card.title} price={card.price} imageURL={card.imageURL} />)}
            </div>
            <br />
            <hr />
            <br />
        </div>
    )
}

export default OrderContainer;