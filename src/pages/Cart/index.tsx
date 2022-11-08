import React, { useEffect } from 'react';
import styles from './Cart.module.css';

import { RootState } from '../../index';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import OrderButton from '../../components/OrderButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import axios from 'axios';
import { setCart } from '../../store/actions';

const Cart: React.FC = () => {

    const dispatch = useAppDispatch();
    const cart = useAppSelector((state: RootState) => state.cart);
    const orderPrice = cart.length > 0 ? cart.map(o => o.price).reduce((a, c) => { return a + c }) : 0;

    useEffect(() => {
        (async function fetchItems() {
            const cartResponse = await axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/cart');
            dispatch(setCart(cartResponse.data));
        }())
    }, [dispatch])

    const renderItems = () => {
        return cart.length > 0 ? cart.map(item =>
            <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />
        ) : <Empty title='Cart is empty' />
    }

    return (
        <div className={styles.cart}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Cart</h1>
                <div className={styles.totalBlock}>
                    <div><b>Total: </b>${orderPrice} USD</div>
                    <OrderButton orderPrice={orderPrice} items={cart} />
                </div>
            </div>
            <div className={styles.container}>
                {renderItems()}
            </div>
        </div>
    )
}

export default Cart;