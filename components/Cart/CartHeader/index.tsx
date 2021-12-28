import React from 'react';
import Link from 'next/link';
import styles from './CartHeader.module.scss';

const CartHeader = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logoLink}>Shopname</a>
        </Link>
        <div className={styles.header__status}>
          <div className={`${styles.header__item} ${styles.itemBlack}`}>
            <span className={`${styles.number} ${styles.numberBlack}`}>1</span>
            <span>Корзина</span>
          </div>
          <div className={`${styles.header__item} ${styles.itemLines}`}>
            <span className={styles.number}>2</span>
            <span>
              Оформление
              <br /> заказа
            </span>
          </div>
          <div className={styles.header__item}>
            <span className={styles.number}>3</span>
            <span>Заказ принят</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CartHeader;
