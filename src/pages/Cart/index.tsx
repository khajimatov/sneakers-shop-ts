import React from 'react';
import styles from './Cart.module.css';

import { useSelector } from 'react-redux';
import { RootState } from '../../index';

import Card from '../../components/Card';
import Empty from '../../components/Empty';

const Cart: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart);

    console.log(cart);
    const renderItems = () => {
        return cart.length > 0 ? cart.map(item => <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />) : <Empty title='Cart is empty' />
    }

    return (
        <div className={styles.cart}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Cart</h1>
            </div>
            <div className={styles.container}>
                {renderItems()}
            </div>
        </div>
    )
}

export default Cart;