import React from 'react';
import Image from 'next/image';

import styles from './CartProduct.module.scss';

import CardImg from 'assets/img/CardImg.png';

const CartProduct = () => {
  return (
    <div className={styles.product}>
      <div className={styles.product__infoContainer}>
        <Image src={CardImg} alt="product" width={64} height={64} />
        <div className={styles.product__info}>
          <span>Silicone Case Full Cover iPhone 12/12 Pro</span>
          <div className={styles.product__characteristics}>
            <span>светло-синий</span>
            <span>iPhone 12</span>
          </div>
        </div>
      </div>
      <div className={styles.product__settings}>
        <div className={styles.product__counter}>
          <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2V0H14V2H0Z" fill="#A0A3BD" />
          </svg>
          <input type="number" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#A0A3BD" />
          </svg>
        </div>
        <span>$12</span>
        <button>
          <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.4286 1.14286H11.1429L10.8071 0.475006C10.736 0.332226 10.6265 0.212122 10.4908 0.128206C10.3552 0.0442899 10.1988 -0.000108142 10.0393 6.26169e-06H5.95714C5.79799 -0.000605543 5.64189 0.043627 5.50672 0.127636C5.37154 0.211645 5.26277 0.332033 5.19286 0.475006L4.85714 1.14286H0.571429C0.419876 1.14286 0.274531 1.20307 0.167368 1.31023C0.0602039 1.41739 0 1.56274 0 1.71429L0 2.85715C0 3.0087 0.0602039 3.15405 0.167368 3.26121C0.274531 3.36837 0.419876 3.42858 0.571429 3.42858H15.4286C15.5801 3.42858 15.7255 3.36837 15.8326 3.26121C15.9398 3.15405 16 3.0087 16 2.85715V1.71429C16 1.56274 15.9398 1.41739 15.8326 1.31023C15.7255 1.20307 15.5801 1.14286 15.4286 1.14286ZM1.9 16.6786C1.92725 17.1138 2.11934 17.5223 2.43716 17.8209C2.75498 18.1194 3.17464 18.2857 3.61071 18.2857H12.3893C12.8254 18.2857 13.245 18.1194 13.5628 17.8209C13.8807 17.5223 14.0727 17.1138 14.1 16.6786L14.8571 4.57143H1.14286L1.9 16.6786Z"
              fill="#14142B"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
