import React from 'react'
import axios from 'axios';
import styles from './Button.module.css';

import { postToCart, removeFromCart } from '../../store/actions';

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
                const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/cart?id=${thisCard.id}`);
                await axios.delete(`https://611a826e5710ca00173a1a6e.mockapi.io/cart/${data[0].index}`);
                dispatch(removeFromCart(thisCard));
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