import axios from 'axios';
import React, { useState } from 'react'
import { setItems } from '../../store/actions';
import { useAppDispatch } from '../../store/hooks';

const Pagination = () => {
    const [pageNum, setPageNum] = useState(1);
    const dispatch = useAppDispatch();
    async function onClick(val: number) {
        const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/items?p=${pageNum}&l=8`)
        setPageNum(val)
        dispatch(setItems(data));
    }

    return (
        <div><button disabled={pageNum === 1} onClick={() => onClick(1)}>1</button><button disabled={pageNum === 2} onClick={() => onClick(2)}>2</button></div>
    )
}

export default Pagination;