import React from 'react'

import './style.css';

interface EmptyProps {
    title: string
}

const Empty = ({ title }: EmptyProps) => {
    return (
        <div className="empty">
            <img src="" alt="" />
            <b>{title}</b>
        </div>
    )
}

export default Empty;