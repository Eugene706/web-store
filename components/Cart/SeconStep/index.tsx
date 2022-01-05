import React from 'react';

import styles from './SecondStep.module.scss';

const SecondStep = () => {
  return (
    <main className={styles.SecondStep}>
      <section className={styles.SecondStep__userInfo}>
        <h2>Ваши контакты и адрес</h2>
        <div className={styles.SecondStep__inputs}></div>
      </section>
      <section className={styles.SecondStep__orderInfo}>
        <h2>Ваш заказ</h2>
      </section>
    </main>
  );
};

export default SecondStep;
