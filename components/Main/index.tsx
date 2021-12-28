import React from 'react';
import Image from 'next/image';

import Catalog from 'components/CatalogItem';
import Slider from 'assets/img/SliderIMg.png';

import styles from './Main.module.scss';
import Card from 'components/Card';
import Expension from './Expansion';
import Header from 'components/Header';
import Footer from 'components/Footer';

const obj = [
  {
    name: 'Доставка',
    subscription:
      'Доставка по Украине осуществляется компанией «Нова Пошта». Посылка доставляется в течение 1-3 рабочих дней с даты отправки заказа. Посылку следует забрать в течение 5-ти дней с момента доставки. По прошествии 5-ти дней компанией Новая Почта взымается доплата за хранение отправления.',
  },
  {
    name: 'Способы оплаты',
    subscription:
      'Доставка по Украине осуществляется компанией «Нова Пошта». Посылка доставляется в течение 1-3 рабочих дней с даты отправки заказа. Посылку следует забрать в течение 5-ти дней с момента доставки. По прошествии 5-ти дней компанией Новая Почта взымается доплата за хранение отправления.',
  },
  {
    name: 'Условия возврата и обмена',
    subscription:
      'Доставка по Украине осуществляется компанией «Нова Пошта». Посылка доставляется в течение 1-3 рабочих дней с даты отправки заказа. Посылку следует забрать в течение 5-ти дней с момента доставки. По прошествии 5-ти дней компанией Новая Почта взымается доплата за хранение отправления.',
  },
];

const Main = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.hero__container}>
              <div className={styles.hero__title}>
                <h2>КАТАЛОГ ТОВАРОВ</h2>
              </div>
              <ul className={styles.hero__catalog}>
                <Catalog />
              </ul>
            </div>
            <div className={styles.hero__slider}>
              <Image src={Slider} alt="Slider" />
            </div>
          </section>

          <div className={styles.products}>
            <section className={styles.sales}>
              <div className={styles.sales__title}>
                <h2>Топ продаж</h2>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.4705 0.931415C10.4705 0.00172775 9.06326 -0.348663 8.44343 0.42204C2.75707 7.49353 10.8378 7.81188 10.8378 11.2494C10.8378 12.6412 9.50127 13.7674 7.86033 13.749C6.24556 13.7314 4.96091 12.5861 4.96091 11.2123V7.87204C4.96091 7.02438 3.74559 6.61306 3.05872 7.22751C1.82963 8.32595 0.553238 10.2076 0.553238 12.4994C0.553238 16.6349 4.50775 19.9994 9.36858 19.9994C14.2294 19.9994 18.1839 16.6349 18.1839 12.4994C18.1839 5.84743 10.4705 4.96032 10.4705 0.931415Z"
                    fill="url(#paint0_linear_7_66)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7_66"
                      x1="9.36858"
                      y1="-0.000640869"
                      x2="9.36858"
                      y2="19.9994"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.416667" stopColor="#F1C40F" />
                      <stop offset="1" stopColor="#E67E22" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.sales__container}>
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </section>

            <section className={styles.news}>
              <h2 className={styles.news__title}>Новинки</h2>
              <div className={styles.news__container}>
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </section>
          </div>

          <section className={styles.answers}>
            <h2 className={styles.answers__title}>Вопросы и ответы</h2>
            {obj && obj.map((item) => <Expension name={item.name} subscription={item.subscription} key={item.name} />)}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Main;
