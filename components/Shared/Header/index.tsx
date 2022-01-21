import { useState } from 'react';
import Link from 'next/link';

import OrderStatus from 'components/Modals/OrderStatus';

import styles from './Header.module.scss';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logoLink}>Shopname</a>
        </Link>
        <div className={styles.header__container}>
          <input className={styles.header__input} type="text" placeholder="Поиск товаров" />
          <div className={styles.header__order} onClick={() => setOpenModal(true)}>
            <span>Статус заказа</span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.5 10.8553H19V7.52159C19 7.12993 18.8406 6.7537 18.5594 6.47615L15.4375 3.39535C15.1562 3.1178 14.775 2.96053 14.3781 2.96053H13V1.48026C13 0.663034 12.3281 0 11.5 0H1.5C0.671875 0 0 0.663034 0 1.48026V11.3487C0 12.1659 0.671875 12.8289 1.5 12.8289H2C2 14.4634 3.34375 15.7895 5 15.7895C6.65625 15.7895 8 14.4634 8 12.8289H12C12 14.4634 13.3438 15.7895 15 15.7895C16.6562 15.7895 18 14.4634 18 12.8289H19.5C19.775 12.8289 20 12.6069 20 12.3355V11.3487C20 11.0773 19.775 10.8553 19.5 10.8553ZM5 14.3092C4.17188 14.3092 3.5 13.6462 3.5 12.8289C3.5 12.0117 4.17188 11.3487 5 11.3487C5.82812 11.3487 6.5 12.0117 6.5 12.8289C6.5 13.6462 5.82812 14.3092 5 14.3092ZM15 14.3092C14.1719 14.3092 13.5 13.6462 13.5 12.8289C13.5 12.0117 14.1719 11.3487 15 11.3487C15.8281 11.3487 16.5 12.0117 16.5 12.8289C16.5 13.6462 15.8281 14.3092 15 14.3092ZM17.5 7.89474H13V4.44079H14.3781L17.5 7.52159V7.89474Z"
                fill="#2264D1"
              />
            </svg>
          </div>
          <div className={styles.cart}>
            <div className={`${styles.cart__sum} ${styles.cart_same}`}>
              <span>$12.39</span>
              <span className={`${styles.cart__spans} ${styles.cart__spans_grey}`}>сумма</span>
            </div>
            <Link href="/cart" passHref>
              <a>
                <button className={`${styles.cart__img} ${styles.cart_same}`}>
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.3375 10.4625L19.9789 3.24024C20.0974 2.71878 19.7011 2.22222 19.1663 2.22222H5.52806L5.20979 0.666319C5.13049 0.278507 4.78924 0 4.39337 0H0.833333C0.37309 0 0 0.37309 0 0.833333V1.38889C0 1.84913 0.37309 2.22222 0.833333 2.22222H3.25983L5.69899 14.147C5.11545 14.4826 4.72222 15.1119 4.72222 15.8333C4.72222 16.9072 5.59278 17.7778 6.66667 17.7778C7.74056 17.7778 8.61111 16.9072 8.61111 15.8333C8.61111 15.2891 8.38726 14.7974 8.02695 14.4444H15.3064C14.9461 14.7974 14.7222 15.2891 14.7222 15.8333C14.7222 16.9072 15.5928 17.7778 16.6667 17.7778C17.7406 17.7778 18.6111 16.9072 18.6111 15.8333C18.6111 15.0635 18.1636 14.3982 17.5146 14.0832L17.7062 13.2402C17.8247 12.7188 17.4283 12.2222 16.8936 12.2222H7.57351L7.34625 11.1111H17.5249C17.914 11.1111 18.2513 10.8419 18.3375 10.4625Z"
                      fill="#EFF0F6"
                    />
                  </svg>
                  <span className={styles.cart__spans}>корзина</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </header>
      {openModal && <OrderStatus closeModal={setOpenModal} />}
    </>
  );
};

export default Header;
