import { FC } from 'react';

import Link from 'next/link';

import styles from './CartHeader.module.scss';

interface ICartHeader {
  activeNumber: number;
}

const CartHeader: FC<ICartHeader> = ({ activeNumber }) => {
  return (
    <div className="container">
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logoLink}>Shopname</a>
        </Link>
        <div className={styles.header__status}>
          <div className={`${styles.header__item} ${activeNumber === 0 ? styles.header__item_active : ''}`}>
            <span className={`${styles.number} ${activeNumber === 0 ? styles.number_active : ''}`}>1</span>
            <span>Корзина</span>
          </div>
          <div className={`${styles.header__item} ${styles.itemLines} ${activeNumber === 1 ? styles.header__item_active : ''}`}>
            <span className={`${styles.number} ${activeNumber === 1 ? styles.number_active : ''}`}>2</span>
            <span>
              Оформление
              <br /> заказа
            </span>
          </div>
          <div className={`${styles.header__item} ${activeNumber === 2 ? styles.header__item_active : ''}`}>
            <span className={`${styles.number} ${activeNumber === 2 ? styles.number_active : ''}`}>3</span>
            <span>Заказ принят</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CartHeader;
