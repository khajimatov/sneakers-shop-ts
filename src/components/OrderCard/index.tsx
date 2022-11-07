import React from 'react'
import styles from './OrderCard.module.css';

interface OrderCardProps {
    title: string,
    price: number,
    imageURL: string
}

const OrderCard: React.FC<OrderCardProps> = ({ title, price, imageURL }) => {
    return (
        <div className={styles.orderCard}>
            <img width={100} height={100} src={imageURL} alt={'Image of ' + title} />
            <h4>{title}</h4>
            <small>PRICE:</small>
            <b>{price}</b>
        </div>
    )
}

export default OrderCard;