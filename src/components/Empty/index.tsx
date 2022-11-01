import React from 'react'

import styles from './Empty.module.css';

interface EmptyProps {
    title: string
}

const Empty: React.FC<EmptyProps> = ({ title }) => {
    return (
        <div className={styles.empty}>
            <img width={100} height={100} src="/img/no-sneakers.png" alt="No Sneakers Illustration" />
            <h2>{title}</h2>
        </div>
    )
}

export default Empty;