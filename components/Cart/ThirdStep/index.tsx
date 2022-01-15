import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/Shared/Button';

import styles from './ThirdStep.module.scss';

import Thank from 'assets/img/thank.jpg';

const ThirdStep = () => {
  return (
    <main className={styles.thanks}>
      <Image src={Thank} alt="thank" />
      <h1>Спасибо за покупку!</h1>
      <p>мы отправим Ваш заказ в ближайшее время</p>
      <Link href="/" passHref>
        <a>
          <Button inscription="Вернуться на главную" />
        </a>
      </Link>
    </main>
  );
};

export default ThirdStep;
