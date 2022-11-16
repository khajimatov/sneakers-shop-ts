import React, { useState } from 'react'
import styles from './SortButton.module.scss'

const SortButton = () => {
    const [selectedOption, setSelectedOption] = useState('sort');

    const onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value)
    }
    console.log(selectedOption);
    return (
        <select onChange={onOptionChange} className={styles.sorting} name="sorting" id="sorting">
            <option value="sort">Sorting</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
        </select>
    )
}

export default SortButton;