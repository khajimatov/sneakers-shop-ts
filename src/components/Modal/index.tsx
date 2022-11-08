import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../..';
import { closeModal, postToOrders } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Address, Order } from '../../types';
import styles from './Modal.module.css';

const Modal: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const orderPrice = useAppSelector((state: RootState) => state.orderPrice);
    const items = useAppSelector((state: RootState) => state.cart);

    const [buyer, setBuyer] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [home, setHome] = useState('');


    const handleBuyer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuyer(event.target.value);
    }
    const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    }
    const handleStreet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(event.target.value);
    }
    const handleHome = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHome(event.target.value);
    }

    const onClickSubmit = async () => {
        const date = Date.now();

        const address: Address = { "city": city, "street": street, "home": home };
        const newOrder: Order = { "index": "1", "items": items, "buyer": buyer, "date": date, "orderPrice": orderPrice, "address": address };

        await dispatch(postToOrders(newOrder));
        dispatch(closeModal());
        navigate('/');
    }
    const onClickCancel = () => {
        dispatch(closeModal());
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalWindow}>

                <form name='orderForm'>
                    <label htmlFor="buyer">Buyer Name</label>
                    <input onChange={handleBuyer} type="text" name="buyer" id="buyer" />

                    <label htmlFor="city">City Name</label>
                    <input onChange={handleCity} type="text" name="city" id="city" />

                    <label htmlFor="street">Street Name</label>
                    <input onChange={handleStreet} type="text" name="street" id="street" />

                    <label htmlFor="home">Home Name</label>
                    <input onChange={handleHome} type="text" name="home" id="home" />

                    <button type='button' onClick={onClickSubmit} >SUBMIT</button>
                    <button type='button' onClick={onClickCancel} >CANCEL</button>
                </form>

            </div>
        </div>
    )
}

export default Modal;