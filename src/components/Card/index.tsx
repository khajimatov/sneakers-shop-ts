import React from 'react'

import './style.css';

interface CardProps {
    imageURL: string,
    title: string
}

const Card = ({ imageURL, title }: CardProps) => {
    return (
        <div className="card">
            <img width={20} height={20} src="/img/favorite.svg" alt="Favorite Icon" className="favorite-icon" />
            <img width={220} height={100} src={imageURL} alt="Nike Easy" className="sneaker-image" />
            <strong>{title}</strong>
        </div>
    )
};

export default Card;