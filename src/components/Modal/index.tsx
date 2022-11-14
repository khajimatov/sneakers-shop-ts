import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../..';
import { postToOrders } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Address, Order } from '../../types';
import styles from './Modal.module.css';

interface ModalProps {
    closeModal: Function
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const orderPrice = useAppSelector((state: RootState) => state.orderPrice);
    const items = useAppSelector((state: RootState) => state.cart);

    const [buyer, setBuyer] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [home, setHome] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isWarn, setIsWarn] = useState(false);
    const [animate, setAnimate] = useState(false);

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
        setIsWarn(false);
        setAnimate(true);
        if (buyer && city && street && home) {
            setIsSubmitted(true);
            const date = Date.now();

            const address: Address = { "city": city, "street": street, "home": home };
            const newOrder: Order = { "index": "1", "items": items, "buyer": buyer, "date": date, "orderPrice": orderPrice, "address": address };

            await dispatch(postToOrders(newOrder));
            setIsSubmitted(false);
            navigate('/');
        } else {
            setIsWarn(true);
        }
    }
    const onClickModalOverlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((event.target as HTMLDivElement).className === styles.modal) {
            closeModal();
        }
    }
    return (
        <div onClick={onClickModalOverlay} className={styles.modal}>
            <div className={styles.modalWindow}>
                {isSubmitted
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.animate_spin}>
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                    </svg>
                    :
                    <form name='orderForm' className={styles.orderForm}>
                        <ul>
                            <li>
                                <label htmlFor="buyer">Name:{isWarn && <span>*</span>}</label>
                                <input autoComplete='new' onChange={handleBuyer} type="text" name="Buyer" id="buyer" />
                            </li>
                            <li>
                                <label htmlFor="city">City:{isWarn && <span>*</span>}</label>
                                <input autoComplete='new' onChange={handleCity} type="text" name="City" id="city" />
                            </li>
                            <li>
                                <label htmlFor="street">Street:{isWarn && <span>*</span>}</label>
                                <input autoComplete='new' onChange={handleStreet} type="text" name="Street" id="street" />
                            </li>
                            <li>
                                <label htmlFor="home">Home:{isWarn && <span>*</span>}</label>
                                <input onChange={handleHome} type="text" name="Home" id="home" />
                            </li>
                        </ul>
                        {isWarn && <div onAnimationEnd={() => setAnimate(false)} className={animate ? styles.isWarn + ' ' + styles.animation : styles.isWarn}>Fill in all fields</div>}
                        <div className={styles.formButtons}>
                            <button type='button' onClick={onClickSubmit} className={styles.submitButton} >SUBMIT</button>
                            <button type='button' onClick={() => closeModal()} className={styles.cancelButton} >CANCEL</button>
                        </div>


                    </form>
                }
            </div>
        </div>
    )
}

export default Modal;