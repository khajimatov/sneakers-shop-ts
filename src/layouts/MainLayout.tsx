import React from 'react';

import { Outlet } from 'react-router-dom';
import { RootState } from '..';

import Header from '../components/Header';
import Modal from '../components/Modal';
import { useAppSelector } from '../store/hooks';

const MainLayout: React.FC = () => {
    const openModal = useAppSelector((state: RootState) => state.modal);
    return (
        <>
            {openModal && <Modal />}
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout;