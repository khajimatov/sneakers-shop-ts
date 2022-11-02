import React from 'react'
import styles from './Favorites.module.css';

import { useSelector } from 'react-redux';
import { RootState } from '../../index';

import Empty from '../../components/Empty';
import Card from '../../components/Card';


const Favorites: React.FC = () => {
    const favorites = useSelector((state: RootState) => state.favorites);

    const renderItems = () => {
        return favorites.length > 0 ? favorites.map(item => <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />) : <Empty title='Favorites are empty' />
    }

    return (
        <div className={styles.favorites}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Favorites</h1>
            </div>
            <div className={styles.container}>
                {renderItems()}
            </div>
        </div>
    )
}

export default Favorites;