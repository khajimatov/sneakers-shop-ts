import React from 'react'

import './style.css';

interface EmptyProps {
    title: string
}

const Empty = ({ title }: EmptyProps) => {
    return (
        <div className="empty">
            <img width={100} height={100} src="/img/no-sneakers.png" alt="No Sneakers Illustration" />
            <h2>{title}</h2>
        </div>
    )
}

export default Empty;