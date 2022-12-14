import React, { useState } from 'react';

import styles from './Card.module.scss';

import Button from '../Button';
import { deleteFromFavorites, postToFavorites } from '../../store/actions';

import { RootState } from '../../index';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface CardProps {
    id: string,
    title: string,
    price: number,
    imageURL: string
}

const Card: React.FC<CardProps> = ({ id, title, imageURL, price }) => {

    const [liked, setLiked] = useState(false);

    const thisCard: CardProps = { id: id, title: title, imageURL: imageURL, price: price };

    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state: RootState) => state.favorites);

    const isLiked = (thisCard: CardProps) => {
        return favorites.find((obj) => Number(obj.id) === Number(thisCard.id));
    }

    const onFavoriteClick = async (e: React.MouseEvent) => {

        setLiked(true);

        try {
            if (isLiked(thisCard)) {
                await dispatch(deleteFromFavorites(thisCard));
            } else {
                await dispatch(postToFavorites(thisCard));
            }
        } catch (error) {
            alert(error);
        }
        setLiked(false);
    }

    return (
        <div className={styles.card} id={id}>
            {liked
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.animate_spin}>
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
                <svg onClick={onFavoriteClick} className={styles.favoriteIcon} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8232 8.07339L10.0044 16L2.18558 8.07339C1.93078 7.81275 1.70897 7.52088 1.52525 7.20452C1.35238 6.89155 1.21638 6.55898 1.12005 6.2137C1.04316 5.86847 1.00291 5.51586 1 5.16191C1.00203 4.79783 1.04228 4.43503 1.12005 4.07963C1.21355 3.73336 1.3497 3.40045 1.52525 3.0888C1.70534 2.76869 1.92745 2.47907 2.18558 2.21994C2.57111 1.83358 3.02403 1.52344 3.52124 1.30533C4.52315 0.898222 5.64085 0.898222 6.64277 1.30533C7.13802 1.51417 7.58523 1.82056 7.96342 2.2047L10.0044 4.29303L12.0455 2.2047C12.4234 1.81988 12.8721 1.51429 13.366 1.30533C14.368 0.898222 15.4857 0.898222 16.4876 1.30533C16.9844 1.52331 17.4376 1.83427 17.8232 2.21994C18.0844 2.47145 18.3035 2.76413 18.4686 3.0888C18.8161 3.71145 18.9973 4.41565 18.9938 5.13142C19.0143 5.49973 18.9839 5.86914 18.9038 6.22895C18.7901 6.73907 18.4391 7.44907 17.8232 8.07339Z" fill={isLiked(thisCard) ? "#EB3E34" : "none"} />
                    <path d="M19.8279 3.97126C19.7127 3.52013 19.5348 3.08738 19.2994 2.68563C19.0733 2.2677 18.7843 1.88707 18.4423 1.55713C17.9466 1.06306 17.3596 0.670084 16.7139 0.400057C15.4142 -0.133352 13.9567 -0.133352 12.657 0.400057C12.0467 0.658382 11.486 1.02091 10.9999 1.47142L10.9285 1.55713L10 2.48564L9.07148 1.55713L9.00006 1.47142C8.51402 1.02091 7.95332 0.658382 7.34302 0.400057C6.04332 -0.133352 4.58583 -0.133352 3.28613 0.400057C2.64043 0.670084 2.05339 1.06306 1.55767 1.55713C0.879659 2.21684 0.399701 3.05306 0.172042 3.97126C0.0509284 4.43755 -0.0067308 4.91804 0.000624357 5.39974C0.000624357 5.85257 0.0577636 6.30397 0.172042 6.74252C0.291797 7.18541 0.464458 7.61226 0.686296 8.01386C0.925874 8.42671 1.21886 8.80614 1.55767 9.14236L10 17.5847L18.4423 9.14236C18.7809 8.80953 19.0709 8.42812 19.2994 8.01386C19.7634 7.22121 20.0052 6.31818 19.9994 5.39974C20.0068 4.91804 19.9491 4.43754 19.8279 3.97126ZM18.3995 6.29969C18.2284 6.95239 17.8884 7.54853 17.4138 8.02815L9.97143 15.4563L2.52904 8.02815C2.28651 7.7839 2.07538 7.51038 1.9005 7.21391C1.73595 6.92062 1.6065 6.60897 1.51481 6.2854C1.44162 5.96188 1.40331 5.63144 1.40054 5.29975C1.40247 4.95857 1.44078 4.61858 1.51481 4.28553C1.60381 3.96103 1.7334 3.64906 1.9005 3.35701C2.07192 3.05703 2.28334 2.78562 2.52904 2.54278C2.89601 2.18072 3.32712 1.89008 3.80039 1.68569C4.75406 1.30418 5.81795 1.30418 6.77163 1.68569C7.24303 1.88139 7.66871 2.16852 8.02869 2.5285L9.97143 4.48551L11.9142 2.5285C12.2739 2.16788 12.701 1.88151 13.1712 1.68569C14.1249 1.30418 15.1888 1.30418 16.1425 1.68569C16.6153 1.88996 17.0467 2.18137 17.4138 2.54278C17.6624 2.77848 17.8709 3.05275 18.0281 3.35701C18.3589 3.9405 18.5313 4.60042 18.528 5.27118C18.5475 5.61633 18.5186 5.96251 18.4423 6.29969H18.3995Z" fill={isLiked(thisCard) ? "#000000" : "#C2C2C2"} />
                </svg>
            }
            <img className={styles.sneakerImage} width={200} height={140} src={imageURL} alt={'Image of ' + title} />
            <h4 title={title} className={styles.cardTitle}>{title}</h4>
            <hr />
            <div className={styles.cardFooter}>
                <section>
                    <small>PRICE:</small><br />
                    <b>${price} USD</b>
                </section>
                <Button thisCard={thisCard} text='+ BUY' />
            </div>

        </div>
    )
};

export default Card;