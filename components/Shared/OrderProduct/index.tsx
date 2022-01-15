import styles from './OrderProduct.module.scss';

const OrderProduct = () => {
  return (
    <div className={styles.product}>
      <h4>Silicone Case Full Cover iPhone 12/12 Pro</h4>
      <p className={styles.product__count}>
        Количество:<span>1</span>
      </p>
      <span>$3.5</span>
    </div>
  );
};

export default OrderProduct;
