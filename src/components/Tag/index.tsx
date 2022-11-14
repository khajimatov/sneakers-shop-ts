import React from 'react'
import styles from './Tag.module.scss';

interface TagProps {
    text: string
}

const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <div className={styles.tag}>{text}</div>
    )
}

export default Tag;