import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>

            <div className={styles.logoBlock}>
                <img src="/img/logo.png" alt="Sneakers Shop Logo" width={60} height={60} />

                <NavLink to="" style={{ textDecoration: 'none' }}>
                    <section>
                        <h2>REACT SNEAKERS</h2>
                        <h5>Sneakers Shop in TypeScript</h5>
                    </section>
                </NavLink>
            </div>

            <ul>
                <NavLink to="cart" style={{ textDecoration: 'none' }}>
                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7057 5.13179C19.5273 4.82259 19.2717 4.56492 18.964 4.38391C18.6563 4.20291 18.3069 4.10474 17.95 4.09899H4.73021L4.13118 1.76487C4.07066 1.53956 3.93564 1.34137 3.7481 1.20259C3.56056 1.06381 3.33155 0.992619 3.09839 1.00061H1.0328C0.758881 1.00061 0.496186 1.10942 0.302499 1.3031C0.108812 1.49679 0 1.75949 0 2.0334C0 2.30732 0.108812 2.57001 0.302499 2.7637C0.496186 2.95739 0.758881 3.0662 1.0328 3.0662H2.31346L5.16398 13.6627C5.2245 13.888 5.35953 14.0862 5.54707 14.225C5.73461 14.3637 5.96361 14.4349 6.19678 14.427H15.4919C15.6827 14.4264 15.8695 14.373 16.0317 14.2727C16.194 14.1725 16.3253 14.0292 16.4111 13.8589L19.7987 7.08377C19.9455 6.77602 20.0139 6.4367 19.9977 6.09609C19.9814 5.75549 19.8812 5.4242 19.7057 5.13179ZM14.8516 12.3614H6.9817L5.29824 6.16459H17.95L14.8516 12.3614Z" fill="#c2c2c2" />
                            <path d="M5.68045 19.591C6.53605 19.591 7.22964 18.8974 7.22964 18.0418C7.22964 17.1862 6.53605 16.4926 5.68045 16.4926C4.82485 16.4926 4.13126 17.1862 4.13126 18.0418C4.13126 18.8974 4.82485 19.591 5.68045 19.591Z" fill="#c2c2c2" />
                            <path d="M16.0084 19.591C16.864 19.591 17.5576 18.8974 17.5576 18.0418C17.5576 17.1862 16.864 16.4926 16.0084 16.4926C15.1528 16.4926 14.4592 17.1862 14.4592 18.0418C14.4592 18.8974 15.1528 19.591 16.0084 19.591Z" fill="#c2c2c2" />
                        </svg>
                        <span>Cart</span>
                    </li>
                </NavLink>
                <NavLink to="favorites" style={{ textDecoration: 'none' }}>
                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8279 4.97126C19.7127 4.52013 19.5348 4.08738 19.2994 3.68563C19.0733 3.2677 18.7843 2.88707 18.4423 2.55713C17.9466 2.06306 17.3596 1.67008 16.7139 1.40006C15.4142 0.866648 13.9567 0.866648 12.657 1.40006C12.0467 1.65838 11.486 2.02091 10.9999 2.47142L10.9285 2.55713L10 3.48564L9.07148 2.55713L9.00006 2.47142C8.51402 2.02091 7.95332 1.65838 7.34302 1.40006C6.04332 0.866648 4.58583 0.866648 3.28613 1.40006C2.64043 1.67008 2.05339 2.06306 1.55767 2.55713C0.879659 3.21684 0.399701 4.05306 0.172042 4.97126C0.0509284 5.43755 -0.0067308 5.91804 0.000624357 6.39974C0.000624357 6.85257 0.0577636 7.30397 0.172042 7.74252C0.291797 8.18541 0.464458 8.61226 0.686296 9.01386C0.925874 9.42671 1.21886 9.80614 1.55767 10.1424L10 18.5847L18.4423 10.1424C18.7809 9.80953 19.0709 9.42812 19.2994 9.01386C19.7634 8.22121 20.0052 7.31818 19.9994 6.39974C20.0068 5.91804 19.9491 5.43754 19.8279 4.97126V4.97126ZM18.3995 7.29969C18.2284 7.95239 17.8884 8.54853 17.4138 9.02815L9.97143 16.4563L2.52904 9.02815C2.28651 8.7839 2.07538 8.51038 1.9005 8.21391C1.73595 7.92062 1.6065 7.60897 1.51481 7.2854C1.44162 6.96188 1.40331 6.63144 1.40054 6.29975C1.40247 5.95857 1.44078 5.61858 1.51481 5.28553C1.60381 4.96103 1.7334 4.64906 1.9005 4.35701C2.07192 4.05703 2.28334 3.78562 2.52904 3.54278C2.89601 3.18072 3.32712 2.89008 3.80039 2.68569C4.75406 2.30418 5.81795 2.30418 6.77163 2.68569C7.24303 2.88139 7.66871 3.16852 8.02869 3.52849L9.97143 5.48551L11.9142 3.52849C12.2739 3.16788 12.701 2.88151 13.1712 2.68569C14.1249 2.30418 15.1888 2.30418 16.1425 2.68569C16.6153 2.88996 17.0467 3.18137 17.4138 3.54278C17.6624 3.77848 17.8709 4.05275 18.0281 4.35701C18.3589 4.9405 18.5313 5.60042 18.528 6.27118C18.5475 6.61633 18.5186 6.96251 18.4423 7.29969H18.3995V7.29969Z" fill="#c2c2c2" />
                        </svg>
                        Favorites
                    </li>
                </NavLink>
                <NavLink to="orders" style={{ textDecoration: 'none' }}>
                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2857 2.14286H14.1429V1.42857C14.1429 1.04969 13.9923 0.686328 13.7244 0.418419C13.4565 0.15051 13.0932 0 12.7143 0H7C6.62112 0 6.25776 0.15051 5.98985 0.418419C5.72194 0.686328 5.57143 1.04969 5.57143 1.42857V2.14286H3.42857C3.04969 2.14286 2.68633 2.29337 2.41842 2.56128C2.15051 2.82919 2 3.19255 2 3.57143V18.5714C2 18.9503 2.15051 19.3137 2.41842 19.5816C2.68633 19.8495 3.04969 20 3.42857 20H16.2857C16.6646 20 17.028 19.8495 17.2959 19.5816C17.5638 19.3137 17.7143 18.9503 17.7143 18.5714V3.57143C17.7143 3.19255 17.5638 2.82919 17.2959 2.56128C17.028 2.29337 16.6646 2.14286 16.2857 2.14286V2.14286ZM7 1.42857H12.7143V4.28571H7V1.42857ZM16.2857 18.5714H3.42857V3.57143H5.57143V5.71429H14.1429V3.57143H16.2857V18.5714Z" fill="#c2c2c2" />
                            <path d="M13.2703 8H6.41313C6.09754 8 5.84171 8.25584 5.84171 8.57143C5.84171 8.88702 6.09754 9.14286 6.41313 9.14286H13.2703C13.5859 9.14286 13.8417 8.88702 13.8417 8.57143C13.8417 8.25584 13.5859 8 13.2703 8Z" fill="#c2c2c2" />
                            <path d="M9.84171 11.4286H6.41313C6.09754 11.4286 5.84171 11.6844 5.84171 12C5.84171 12.3156 6.09754 12.5714 6.41313 12.5714H9.84171C10.1573 12.5714 10.4131 12.3156 10.4131 12C10.4131 11.6844 10.1573 11.4286 9.84171 11.4286Z" fill="#c2c2c2" />
                        </svg>
                        Orders
                    </li>
                </NavLink>
            </ul>

        </header>
    )
};

export default Header;