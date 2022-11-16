import { useState, useEffect } from 'react'

import styles from './Home.module.scss';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCart, setFavorites, setItems } from '../../store/actions';
import { RootState } from '../..';
import SortButton from '../../components/SortButton';

const Home: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        (async function fetchItems() {
            const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/items'), axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/cart'), axios.get('https://611a826e5710ca00173a1a6e.mockapi.io/favorites')]);
            dispatch(setItems(itemsResponse.data));
            dispatch(setCart(cartResponse.data));
            dispatch(setFavorites(favoritesResponse.data));
        }())
    }, [dispatch])

    const items = useAppSelector((state: RootState) => state.items);

    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
        return filteredItems.length > 0 ? filteredItems.map(item => <Card key={item.id} id={item.id} title={item.title} price={item.price} imageURL={item.imageURL} />) : <Empty title='No sneakers' />
    }

    return (
        <div className={styles.home}>
            <div className={styles.homeHeader}>
                <h1>Sneakers</h1>
                <SortButton />
                <div className={styles.search}>
                    <label htmlFor="search">
                        <svg
                            className={styles.searchIcon}
                            width="18"
                            height="18"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                stroke="#c2c2c2"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </label>
                    <input className={styles.searchInput} type="text" name="search" id="search" placeholder="Search sneakers" onChange={onChangeSearchInput} autoComplete="off" />
                </div>
            </div>
            <div className={styles.container}>
                {renderItems()}
            </div>
        </div>
    )
};

export default Home;