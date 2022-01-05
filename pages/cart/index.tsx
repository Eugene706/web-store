import { createContext, useState } from 'react';

import styles from './Cart.module.scss';

import CartHeader from 'components/Cart/CartHeader';
import Empty from 'components/Cart/Empty';
import FirstStep from 'components/Cart/FirstStep';

const stepsComponents: IstepsComponents = {
  0: FirstStep,
  1: Empty,
};

interface IstepsComponents {
  [key: number]: () => JSX.Element;
}

const Cart = () => {
  const [step, setStep] = useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className={styles.cart}>
      <CartHeader />
      {/* <Empty /> */}
      <Step />
    </div>
  );
};

export default Cart;
