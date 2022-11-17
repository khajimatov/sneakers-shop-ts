import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { paginate } from '../../store/actions';
import { useAppDispatch } from '../../store/hooks';

const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [URLParams, setURLParams] = useSearchParams('l=8');
    const [pageNum, setPageNum] = useState('');

    useEffect(() => {
        (function fetchSearchParams() {
            setURLParams(location.search);
            if (URLParams.has('p')) {
                setPageNum(URLParams.get('p')!);
            } else {
                setPageNum('1');
            }
        }())
    }, [URLParams])

    async function onClick(val: string) {
        URLParams.set('p', val);
        navigate('?' + URLParams.toString());
        dispatch(paginate(URLParams.toString()));
        setPageNum(val);
    }

    return (
        <div><button disabled={pageNum === "1"} onClick={() => onClick("1")}>1</button><button disabled={pageNum === "2"} onClick={() => onClick("2")}>2</button></div>
    )
}

export default Pagination;