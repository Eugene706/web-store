import { useState } from 'react';

import styles from './Cart.module.scss';

import CartHeader from 'components/Cart/CartHeader';
import Empty from 'components/Cart/Empty';

const Cart = () => {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.cart}>
      <CartHeader />
      <Empty />
    </div>
  );
};

export default Cart;
