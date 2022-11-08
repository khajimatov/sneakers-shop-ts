import React from 'react'
import { useNavigate } from 'react-router-dom';
import { clearCart, postToOrders } from '../../store/actions';
import { useAppDispatch } from '../../store/hooks';
import { Item } from '../../types';
import styles from './OrderButton.module.css';

interface OrderButtonProps {
    items: Item[]
}

const OrderButton: React.FC<OrderButtonProps> = ({ items }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onClickOrder = async () => {
        await dispatch(postToOrders(items));
        navigate("/");
    }

    return (
        <button disabled={items.length > 0 ? false : true} onClick={onClickOrder} className={styles.orderButton} >ORDER
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.833333 6.66667H10.7167L7.69167 10.3C7.62163 10.3843 7.56887 10.4815 7.53641 10.5862C7.50395 10.6908 7.49242 10.8008 7.50248 10.9099C7.5228 11.1303 7.62982 11.3336 7.8 11.475C7.97018 11.6165 8.18958 11.6845 8.40994 11.6642C8.63029 11.6439 8.83355 11.5368 8.975 11.3667L13.1417 6.36667C13.1697 6.3269 13.1948 6.28512 13.2167 6.24167C13.2167 6.2 13.2583 6.175 13.275 6.13333C13.3128 6.03779 13.3325 5.93608 13.3333 5.83333C13.3325 5.73059 13.3128 5.62888 13.275 5.53334C13.275 5.49167 13.2333 5.46667 13.2167 5.425C13.1948 5.38155 13.1697 5.33977 13.1417 5.3L8.975 0.300002C8.89665 0.205933 8.79853 0.130283 8.68763 0.0784318C8.57672 0.0265809 8.45576 -0.000197227 8.33333 1.59196e-06C8.13862 -0.000378836 7.94993 0.067434 7.8 0.191668C7.71562 0.261626 7.64587 0.347543 7.59474 0.444499C7.54361 0.541455 7.51212 0.647545 7.50205 0.756692C7.49199 0.865839 7.50356 0.9759 7.53609 1.08057C7.56863 1.18524 7.6215 1.28246 7.69167 1.36667L10.7167 5H0.833333C0.61232 5 0.400358 5.0878 0.244078 5.24408C0.0877975 5.40036 0 5.61232 0 5.83333C0 6.05435 0.0877975 6.26631 0.244078 6.42259C0.400358 6.57887 0.61232 6.66667 0.833333 6.66667Z" fill="black" />
            </svg>
        </button>
    )
}

export default OrderButton;