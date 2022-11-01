import React from 'react';

import styles from './Cart.module.css';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}
interface CartProps {
    cartItems: Item[]
}

const Cart = () => {



    return (
        <div className={styles.cart}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Cart</h1>
            </div>

            <div className={styles.container}>
                {/* {cartItems.length > 0 ? cartItems.map(item => <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />) : <Empty title='No items in cart' />} */}
                {<Empty title='Cart is empty' />}
            </div>
        </div>
    )
}

export default Cart;