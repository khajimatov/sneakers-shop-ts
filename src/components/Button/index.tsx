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
        <button disabled={disable} onClick={onBuyClick} className={styles.buyButton}>
            {disable
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.animate_spin}>
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                : isAdded(thisCard) ? "REMOVE" : text}</button>
    )
}

export default Button;