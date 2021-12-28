import React from 'react';

import styles from './CatalogItem.module.scss';

const Catalog = () => {
  return (
    <>
      <li className={styles.item}>
        Чехлы
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </li>
      <li className={styles.item}>
        Стекла
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </li>
      <li className={styles.item}>
        Пленки
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </li>
      <li className={styles.item}>
        Кабели/переходники
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </li>
      <li className={styles.item}>
        Зарядные устройства
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </li>
      <li className={styles.item}>
        Аксессуары для смарт-часов
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </li>
    </>
  );
};

export default Catalog;
