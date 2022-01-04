import styles from './OrderStatus.module.scss';

const OrderResult = () => {
  return (
    <div className={styles.status__result}>
      <dl>
        <dt>Заказ №:</dt>
        <dd>9812527</dd>
      </dl>
      <dl>
        <dt>ЕН:</dt>
        <dd>59000571884305</dd>
      </dl>
      <dl>
        <dt>Статус:</dt>
        <dd>отправлено</dd>
      </dl>
    </div>
  );
};

export default OrderResult;
