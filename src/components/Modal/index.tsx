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
            setIsWarn(() => true);
        }
    }
    const onClickCancel = () => {
        closeModal();
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalWindow}>
                {isWarn && <div onAnimationEnd={() => setAnimate(false)} className={animate ? styles.isWarn + ' ' + styles.animation : styles.isWarn}>Fill in all fields</div>}
                {isSubmitted ? <div className={styles.loader} ><img width={200} height={200} src="/img/loader.gif" alt="Loader GIF" /></div> :
                    <form autoComplete="off" name='orderForm' className={styles.orderForm}>
                        <ul>
                            <li>
                                <label htmlFor="buyer">Name:<span>*</span></label>
                                <input autoComplete="off" onChange={handleBuyer} type="text" name="buyer" id="buyer" />
                            </li>
                            <li>
                                <label htmlFor="city">City:<span>*</span></label>
                                <input autoComplete="off" onChange={handleCity} type="text" name="city" id="city" />
                            </li>
                            <li>
                                <label htmlFor="street">Street:<span>*</span></label>
                                <input autoComplete="off" onChange={handleStreet} type="text" name="street" id="street" />
                            </li>
                            <li>
                                <label htmlFor="home">Home:<span>*</span></label>
                                <input autoComplete="off" onChange={handleHome} type="text" name="home" id="home" />
                            </li>
                        </ul>
                        <div className={styles.formButtons}>
                            <button type='button' onClick={onClickSubmit} className={styles.submitButton} >SUBMIT</button>
                            <button type='button' onClick={onClickCancel} className={styles.cancelButton} >CANCEL</button>
                        </div>


                    </form>
                }
            </div>
        </div>
    )
}

export default Modal;