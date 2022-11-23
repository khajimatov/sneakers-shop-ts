import React from 'react';

import { RootState } from '../..';
import { removeToast } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import * as Toast from '@radix-ui/react-toast';
import styles from './Toast.module.scss';

const RadixToast: React.FC = () => {
    const toastText = useAppSelector((state: RootState) => state.toastText);
    const dispatch = useAppDispatch();

    const onCloseToast = () => {
        dispatch(removeToast());
    }

    return (
        <Toast.Provider>
            <Toast.Root onOpenChange={onCloseToast} className={styles.ToastRoot}>
                <Toast.Title className={styles.ToastTitle}>Error</Toast.Title>
                <Toast.Description asChild>
                    <div className={styles.ToastDescription}>{toastText}</div>
                </Toast.Description>
                <Toast.Action
                    className={styles.ToastAction}
                    asChild
                    altText="Close Toast"
                >
                    <button onClick={onCloseToast} className={`${styles.Button + ' ' + styles.small + ' ' + styles.slate}`}>Close</button>
                </Toast.Action>
            </Toast.Root>
            <Toast.Viewport className={styles.ToastViewport} />
        </Toast.Provider>
    )
}

export default RadixToast;