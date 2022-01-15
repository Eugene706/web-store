import { FC } from 'react';
import Link from 'next/link';

import Button from 'components/Shared/Button';
import CartProduct from 'components/Shared/CartProduct';
import { IStep } from 'types/ComponentTypes';

import styles from './FirstStep.module.scss';

const FirstStep: FC<IStep> = ({ onNextStep }) => {
  return (
    <main className={styles.firsStep}>
      <h1 className={styles.firsStep__title}>Ваш заказ</h1>
      <div className={styles.firsStep__products}>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <div className={styles.firsStep__infoBlock}>
          <span className={styles.firsStep__warning}>*добавления товара в корзину не резервирует его</span>
          <p className={styles.firsStep__sum}>
            Сумма заказа:<span>$36</span>
          </p>
        </div>
      </div>
      <div className={styles.firsStep__buttons}>
        <Link href="/" passHref>
          <a>
            <Button inscription="Вернуться в меню" />
          </a>
        </Link>
        <Button inscription="Оформить заказ" orientation={true} onClick={onNextStep} />
      </div>
    </main>
  );
};

export default FirstStep;
