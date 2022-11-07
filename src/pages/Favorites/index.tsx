import React, { useEffect } from 'react'
import styles from './Favorites.module.css';

import { RootState } from '../../index';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import axios from 'axios';
import { setFavorites } from '../../store/actions';

const Favorites: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        (async function fetchItems() {
            const favoritesResponse = await axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/favorites');
            dispatch(setFavorites(favoritesResponse.data));
        }())
    }, [dispatch])

    const favorites = useAppSelector((state: RootState) => state.favorites);

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