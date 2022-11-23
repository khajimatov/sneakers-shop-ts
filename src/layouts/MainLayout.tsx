import React from 'react';

import { Outlet } from 'react-router-dom';
import { RootState } from '..';

import Header from '../components/Header';
import Toast from '../components/Toast';
import { removeToast } from '../store/actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const MainLayout: React.FC = () => {
    const toastText = useAppSelector((state: RootState) => state.toastText);
    const dispatch = useAppDispatch();
    return (
        <div className="wrapper">
            {toastText ? <Toast onClose={() => dispatch(removeToast())} /> : null}
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;