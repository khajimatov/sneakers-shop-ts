import React from 'react';
import styles from './Cart.module.css';

import { useSelector } from 'react-redux';
import { RootState } from '../../index';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import OrderButton from '../../components/OrderButton';

const Cart: React.FC = () => {

    const cart = useSelector((state: RootState) => state.cart);

    const renderItems = () => {
        return cart.length > 0 ? cart.map(item =>
            <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />
        ) : <Empty title='Cart is empty' />
    }

    return (
        <div className={styles.cart}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Cart</h1>
                <div>
                    Total: $<b>{cart.length > 0 ? cart.map(o => o.price).reduce((a, c) => { return a + c }) : 0}</b> USD
                    <OrderButton />
                </div>
            </div>
            <div className={styles.container}>
                {renderItems()}
            </div>
        </div>
    )
}

export default Cart;