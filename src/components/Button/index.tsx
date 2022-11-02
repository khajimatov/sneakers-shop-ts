import React from 'react'
import styles from './Button.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions';

import { RootState } from '../../index';

interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}

interface ButtonProps {
    thisCard: Item,
    text: string
}

const Button: React.FC<ButtonProps> = ({ thisCard, text }) => {

    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const isAdded = (thisCard: Item) => {
        return cart.find((obj) => Number(obj.id) === Number(thisCard.id));
    }

    const onBuyClick = (e: React.MouseEvent) => {

        if (isAdded(thisCard)) {
            dispatch(removeFromCart(thisCard));
        } else {
            dispatch(addToCart(thisCard));
        }
    }
    return (
        <button onClick={onBuyClick} className={styles.buyButton}>{isAdded(thisCard) ? "REMOVE" : text}</button>
    )
}

export default Button;