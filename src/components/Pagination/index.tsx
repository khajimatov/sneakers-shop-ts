import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { setItems } from '../../store/actions';
import { useAppDispatch } from '../../store/hooks';

const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [URLParams, setURLParams] = useSearchParams(location.search);
    const [pageNum, setPageNum] = useState('');

    useEffect(() => {
        (function fetchSearchParams() {
            setURLParams(location.search);
            URLParams.set('l', '8');
            if (URLParams.has('p')) {
                setPageNum(URLParams.get('p')!);
            } else {
                setPageNum('1');
            }
        }())
    }, [])

    async function onClick(val: string) {
        URLParams.set('p', val);
        navigate('?' + URLParams.toString());
        const { data } = await axios.get(`https://611a826e5710ca00173a1a6e.mockapi.io/items?p=${val}&l=8`)
        setPageNum(val);
        dispatch(setItems(data));
    }

    return (
        <div><button disabled={pageNum === "1"} onClick={() => onClick("1")}>1</button><button disabled={pageNum === "2"} onClick={() => onClick("2")}>2</button></div>
    )
}

export default Pagination;