import React, { useState } from 'react'
import styles from './Button.module.css';

import { deleteFromCart, postToCart } from '../../store/actions';

import { RootState } from '../../index';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Item } from '../../types';

interface ButtonProps {
    thisCard: Item,
    text: string
}

const Button: React.FC<ButtonProps> = ({ thisCard, text }) => {

    const [disable, setDisable] = useState(false);

    const cart = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

    const isAdded = (thisCard: Item) => {
        return cart.find((obj) => Number(obj.id) === Number(thisCard.id));
    }

    const onBuyClick = async (e: React.MouseEvent) => {

        setDisable(true);
        try {
            if (isAdded(thisCard)) {
                await dispatch(deleteFromCart(thisCard));
            } else {
                await dispatch(postToCart(thisCard));
            }
        } catch (error) {
            alert(error);
        }
        setDisable(false);
    }
    return (
        <button disabled={disable} onClick={onBuyClick} className={styles.buyButton}>{disable ? <img width={18} height={18} src="/img/loader.gif" alt="Loader GIF" /> : isAdded(thisCard) ? "REMOVE" : text}</button>
    )
}

export default Button;