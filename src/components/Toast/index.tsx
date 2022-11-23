import React from 'react';
import { RootState } from '../..';
import { removeToast } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './Toast.module.scss';

const Toast: React.FC = () => {
    const toastText = useAppSelector((state: RootState) => state.toastText);
    const dispatch = useAppDispatch();

    const onCloseToast = () => {
        dispatch(removeToast());
    }

    return (
        <div className={styles.toast}>{toastText}<button onClick={() => onCloseToast()} >X</button></div>
    )
}

export default Toast;