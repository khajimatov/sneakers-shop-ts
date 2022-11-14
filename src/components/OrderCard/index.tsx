import React from 'react'
import styles from './OrderCard.module.scss';

interface OrderCardProps {
    title: string,
    price: number,
    imageURL: string
}

const OrderCard: React.FC<OrderCardProps> = ({ title, price, imageURL }) => {
    return (
        <div className={styles.orderCard}>
            <img width={80} height={80} src={imageURL} alt={'Image of ' + title} />
            <div className={styles.text}>
                <h4>{title}</h4>
                <small>PRICE: </small>
                <small>${price} USD</small>
            </div>
        </div>
    )
}

export default OrderCard;