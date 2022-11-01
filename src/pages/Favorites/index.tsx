import React from 'react'

import styles from './Favorites.module.css';

import Empty from '../../components/Empty';

const Favorites = () => {



    return (
        <div className={styles.favorites}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Favorites</h1>
            </div>
            <div className={styles.container}>
                {/* {favoriteItems.length > 0 ? favoriteItems.map(item => <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />) : <Empty title='No items in cart' />} */}
                {<Empty title='Favorites are empty' />}
            </div>
        </div>
    )
}

export default Favorites;