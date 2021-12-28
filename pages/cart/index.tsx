import CartHeader from 'components/Cart/CartHeader';
import Empty from 'components/Cart/Empty';
import React from 'react';
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartHeader />
      <Empty />
    </div>
  );
};

export default Cart;
