import { useState } from 'react';
import Image from 'next/image';

import Footer from 'components/Footer';
import Header from 'components/Header';

import styles from './Product.module.scss';

import MainImg from 'assets/img/MainImg.png';
import MinorImg from 'assets/img/smallimg.png';
import MinorImg1 from 'assets/img/smallimg1.png';
import Recommendation from 'components/Shared/Recommendation';
import Design from 'components/Shared/Design';
import Link from 'next/link';
import Button from 'components/Shared/Button';

const Product = () => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <div className="container">
        <Header />
        <main className={styles.localCont}>
          <div className={styles.product}>
            <div className={styles.imgs}>
              <Image className={styles.imgs__mainImg} src={MainImg} alt="mainImg" width={500} height={500} />
              <div className={styles.imgs__minor}>
                <Image src={MinorImg} alt="minorImg" width={70} height={70} />
                <Image src={MinorImg1} alt="minorImg" width={70} height={70} />
              </div>
            </div>
            <section className={styles.product__info}>
              <h1 className={styles.product__title}>Silicone Case Full Cover iPhone 12/12 Pro</h1>
              <div className={styles.product__overview}>
                <dl>
                  <dt>Тип товара:</dt>
                  <dd>Чехол</dd>
                </dl>
                <dl>
                  <dt>Модель:</dt>
                  <dd>iPhone 12/12 Pro</dd>
                </dl>
                <dl>
                  <dt>Тип материала:</dt>
                  <dd>TPU</dd>
                </dl>
                <dl>
                  <dt>Производитель устройства:</dt>
                  <dd>Apple</dd>
                </dl>
                <dl>
                  <dt>Бренд:</dt>
                  <dd>Apple</dd>
                </dl>
                <dl>
                  <dt>Форм-фактор:</dt>
                  <dd>Накладка</dd>
                </dl>
              </div>
              <div className={styles.product__priceBlock}>
                <span className={styles.product__price}>$3.00</span>
                <br />
                <span>85.65 ₴</span>
              </div>
              <div className={styles.product__design}>
                <h2>Дизайн:</h2>
                <span>turquoise</span>
                <div className={styles.product__colors}>
                  <Design colorName="black" color="black" />
                  <Design colorName="cotton_candy" color="#F4B7BF" />
                  <Design colorName="papaya" color="#FE8D55" />
                  <Design colorName="turquoise" color="#8DDAE4" />
                  <Design colorName="yellow" color="yellow" />
                </div>
              </div>
              <div className={styles.product__countBlock}>
                <h2>Количество:</h2>
                <div className={styles.counterContainer}>
                  <div className={styles.counterContainer__counter}>
                    <button>-</button>
                    <input type="number" readOnly min={1} value={counter} onChange={(e) => setCounter(+e.target.value)} />
                    <button>+</button>
                  </div>
                  <span>В наличии: 51 шт.</span>
                </div>
                <button>В корзину</button>
              </div>
              <div className={styles.product__characteristics}>
                <span>Основные характеристики</span>
                <ul style={{ height: '96px' }}>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>
                    Praesent efficitur, massa et pulvinar aliquam, tortor metus fringilla ligula, nec semper dolor nibh a diam.
                    Sed vel elementum augue.
                  </li>
                  <li>Duis lectus diam, euismod at augue vitae, lacinia blandit felis.</li>
                </ul>
                <button>
                  Читать больше
                  <svg width="6.5" height="10.5" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
                  </svg>
                </button>
              </div>
            </section>
          </div>
          <div className={styles.product__recommendations}>
            <Recommendation />
            <Recommendation />
            <Recommendation />
            <Recommendation />
          </div>
          <Link href="/" passHref>
            <a>
              <Button inscription="Назад в каталог" />
            </a>
          </Link>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Product;
