import { FC } from 'react';

import Button from 'components/Shared/Button';
import OrderProduct from 'components/Cart/OrderProduct';

import { IStep } from 'types/ComponentTypes';

import styles from './SecondStep.module.scss';

const SecondStep: FC<IStep> = ({ onPrevStep, onNextStep }) => {
  return (
    <div className="container">
      <main className={styles.SecondStep}>
        <section className={styles.SecondStep__userInfo}>
          <h2>Ваши контакты и адрес</h2>
          <form className={styles.SecondStep__inputs}>
            <ul>
              <li>
                <label htmlFor="name">Имя</label>
                <br />
                <input type="text" id="name" />
              </li>
              <li>
                <label htmlFor="surname">Фамилия</label>
                <br />
                <input type="text" id="surname" />
              </li>
              <li className={styles.SecondStep__inputs_row}>
                <div className={styles.SecondStep__contactIputs}>
                  <label htmlFor="phone">Телефон</label>
                  <br />
                  <input type="text" id="phone" />
                </div>
                <div className={styles.SecondStep__contactIputs}>
                  <label htmlFor="email">Эл. почта</label>
                  <br />
                  <input type="text" id="email" />
                </div>
              </li>
              <li className={styles.SecondStep__inputs_row}>
                <div className={styles.SecondStep__locationIputs}>
                  <label htmlFor="city">Город</label>
                  <br />
                  <input type="text" id="city" />
                </div>
                <div className={styles.SecondStep__contactIputs_second}>
                  <label htmlFor="post">Почтовое отделение</label>
                  <br />
                  <input type="text" id="post" />
                </div>
              </li>
            </ul>
          </form>
        </section>
        <section className={styles.SecondStep__orderInfo}>
          <h2>Ваш заказ</h2>
          <div className={styles.SecondStep__ordersContainer}>
            <div className={styles.SecondStep__orders}>
              <OrderProduct />
              <OrderProduct />
              <OrderProduct />
              <OrderProduct />
            </div>
            <div className={styles.SecondStep__price}>
              <dl>
                <dt>Общая стоимость:</dt>
                <dd>200.1₴</dd>
              </dl>
              <dl>
                <dt>Стоимость доставки:</dt>
                <dd>50₴</dd>
              </dl>
            </div>
          </div>
          <p className={styles.SecondStep__sum}>
            Итого к оплате:<span>250.1₴</span>
          </p>
        </section>
      </main>
      <div className={styles.SecondStep__buttons}>
        <Button onClick={onPrevStep} inscription="Вернуться в корзину" />
        <Button onClick={onNextStep} inscription="Перейти к оплате" orientation={true} />
      </div>
    </div>
  );
};

export default SecondStep;
