import Image from 'next/image';
import Link from 'next/link';

import styles from './ErrorPage.module.scss';

import error from 'assets/img/error.png';
import Button from 'components/Shared/Button';

const ErrorPage = () => {
  return (
    <div className="container">
      <header className={styles.error__header}>
        <Link href="/">
          <a className={styles.error__logoLink}>Shopname</a>
        </Link>
      </header>
      <main className={styles.error__container}>
        <Image src={error} alt="error" />
        <section className={styles.error__subs}>
          <h1>404</h1>
          <samp>страница не найдена</samp>
          <Button>
            <Link href="/" passHref>
              <a>Вернуться на главную</a>
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default ErrorPage;
