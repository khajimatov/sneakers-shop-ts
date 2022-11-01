import React from 'react'

import styles from './Button.module.css';

interface ButtonProps {
    text: string
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button className={styles.buyButton}>{text}</button>
    )
}

export default Button;