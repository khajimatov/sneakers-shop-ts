import React from 'react';

import styles from './Orders.module.css';

import Empty from '../../components/Empty';

const Orders: React.FC = () => {
    return (
        <div className={styles.orders}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Orders</h1>
            </div>
            <div className={styles.container}>
                {/* {orderedItems.length > 0 ? orderedItems.map(item => <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />) : <Empty title='Orders are empty' />} */}
                {<Empty title="Orders are empty" />}
            </div>
        </div>
    )
}

export default Orders;