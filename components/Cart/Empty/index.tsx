import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Empty.module.scss';
import Airpods from 'assets/img/airpods.png';

const Empty = () => {
  return (
    <div className={styles.empty}>
      <Image src={Airpods} alt="Slider" />
      <h1 className={styles.empty__title}>Кажется здесь пусто!</h1>
      <Link href="/" passHref>
        <button className={styles.empty__button}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
          </svg>
          Вернуться в меню
        </button>
      </Link>
    </div>
  );
};

export default Empty;
