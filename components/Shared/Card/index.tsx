import Image from 'next/image';

import styles from './Card.module.scss';

import Link from 'next/link';

import CardImg from 'assets/img/CardImg.png';

const Card = () => {
  return (
    <div className={styles.card}>
      <Image className={styles.card__img} src={CardImg} alt="card" />
      <div className={styles.card__block}>
        <span className={styles.card__name}>Silicone Case Full Cover iPhone 12/12 Pro</span>
        <span className={styles.card__price}>$3.60</span>
        <button className={styles.card__details}>
          <Link href="/product/1">
            <a>Подробнее</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
