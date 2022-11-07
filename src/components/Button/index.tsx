import React from 'react'
import styles from './Button.module.css';

import { deleteFromCart, postToCart } from '../../store/actions';

import { RootState } from '../../index';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

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

    const cart = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

    const isAdded = (thisCard: Item) => {
        return cart.find((obj) => Number(obj.id) === Number(thisCard.id));
    }

    const onBuyClick = async (e: React.MouseEvent) => {

        try {
            if (isAdded(thisCard)) {
                dispatch(deleteFromCart(thisCard));
            } else {
                dispatch(postToCart(thisCard));
            }
        } catch (error) {
            alert(error);
        }
    }
    return (
        <button onClick={onBuyClick} className={styles.buyButton}>{isAdded(thisCard) ? "REMOVE" : text}</button>
    )
}

export default Button;