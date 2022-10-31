import { useState, useEffect } from 'react'

import styles from './Home.module.css';

import Card from '../../components/Card';
import Empty from '../../components/Empty';

interface Item {
    id: string,
    title: string,
    price: number,
    imageURL: string
}

const Home = () => {

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        return () => {
            setItems([{
                "id": "1",
                "title": "Nike Blazer Mid Suede",
                "price": 250,
                "imageURL": "/img/sneakers/1.jpg"
            },
            {
                "id": "2",
                "title": "Jordan Air Jordan 11",
                "price": 149,
                "imageURL": "/img/sneakers/2.jpg"
            },
            {
                "id": "3",
                "title": "Nike Force Yezzy",
                "price": 149,
                "imageURL": "/img/sneakers/3.jpg"
            },
            {
                "id": "4",
                "title": "Adidas X Gen",
                "price": 149,
                "imageURL": "/img/sneakers/4.jpg"
            },
            {
                "id": "5",
                "title": "Puma II Exclusive",
                "price": 149,
                "imageURL": "/img/sneakers/3.jpg"
            }]);
        }
    }, [])

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
                <div className={styles.search}>
                    <label htmlFor="search">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </label>
                    <input type="text" name="search" id="search" placeholder="Search sneakers" onChange={onChangeSearchInput} autoComplete="off" />
                </div>
            </div>
            <div className={styles.container}>
                {renderItems()}
            </div>
        </div>
    )
};

export default Home;