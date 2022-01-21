import React from 'react';

import CatalogTitle from 'components/Shared/CatalogTitle';
import CategoryList from 'components/Categories/CategoryList';

import Footer from 'components/Shared/Footer';
import Header from 'components/Shared/Header';

import styles from './Category.module.scss';
import SortPopup from 'components/Shared/SortPopup';
import Card from 'components/Shared/Card';
import Button from 'components/Shared/Button';
import Link from 'next/link';

const Category = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main className={styles.category}>
          <div className={styles.category__choiceCont}>
            <CatalogTitle />
            <CategoryList />
          </div>
          <section className={styles.category__productsCont}>
            <h1>Чехлы</h1>
            <div className={styles.category__header}>
              <div className={styles.category__paramsCont}>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
                <button className={styles.category__param}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3.00002L9.3871 9.38711"
                      stroke="#14142B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M3 9.3871L9.3871 3" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Brend 01
                </button>
              </div>

              <SortPopup />
            </div>
            <div className={styles.category__products}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className={styles.category__navigation}>
              <Link href="/">
                <a>
                  <Button inscription="Назад в каталог" />
                </a>
              </Link>
              <div className={styles.pagination}>
                <button className={`${styles.pagination__directory} ${styles.pagination__directory_prev}`}>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.3885 15.7588L9.12798 10.5L14.3885 5.24127L15.6266 6.47852L11.6016 10.5035L15.6266 14.5285L14.3885 15.7588ZM7.12598 15.75H5.37598V5.25002H7.12598V15.75Z"
                      fill="#14142B"
                    />
                  </svg>
                  назад
                </button>
                <span className={`${styles.pagination__page} ${styles.pagination__page_active}`}>1</span>
                <span className={styles.pagination__page}>2</span>
                <span className={styles.pagination__page}>3</span>
                <span className={styles.pagination__page}>...</span>
                <span className={styles.pagination__page}>12</span>
                <span className={styles.pagination__page}>13</span>
                <button className={`${styles.pagination__directory} ${styles.pagination__directory_next}`}>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.3885 15.7588L9.12798 10.5L14.3885 5.24127L15.6266 6.47852L11.6016 10.5035L15.6266 14.5285L14.3885 15.7588ZM7.12598 15.75H5.37598V5.25002H7.12598V15.75Z"
                      fill="#14142B"
                    />
                  </svg>
                  вперед
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Category;
