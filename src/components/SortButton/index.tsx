import axios from 'axios';
import React, { useState } from 'react'
import { setItems, setSorting } from '../../store/actions';
import { useAppDispatch } from '../../store/hooks';
import styles from './SortButton.module.scss'

const SortButton = () => {
    const [load, setLoad] = useState(false);
    const dispatch = useAppDispatch();

    const onOptionChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoad(true);
        await dispatch(setSorting(e.target.value));
        setLoad(false);
    }

    return (
        <div className={styles.container}>
            <select onChange={onOptionChange} className={styles.sorting} name="sorting" id="sorting">
                <option value="sort">Sort by:</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>
            {load ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.animate_spin}>
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                : null}
        </div>

    )
}

export default SortButton;