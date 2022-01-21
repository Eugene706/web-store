import Image from 'next/image';
import Link from 'next/link';

import Airpods from 'assets/img/airpods.png';
import Button from 'components/Shared/Button';

import styles from './Empty.module.scss';

const Empty = () => {
  return (
    <main className={styles.empty}>
      <Image src={Airpods} alt="Slider" />
      <h1 className={styles.empty__title}>Кажется здесь пусто!</h1>
      <Button>
        <Link href="/">
          <a>Вернуться в меню</a>
        </Link>
      </Button>
    </main>
  );
};

export default Empty;
