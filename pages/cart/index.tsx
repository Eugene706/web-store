import { createContext, FunctionComponent, useState } from 'react';

import styles from './Cart.module.scss';

import CartHeader from 'components/Cart/CartHeader';
import Empty from 'components/Cart/Empty';
import FirstStep from 'components/Cart/FirstStep';
import SecondStep from 'components/Cart/SecondStep';
import ThirdStep from 'components/Cart/ThirdStep';
import { IStep } from 'types/ComponentTypes';

const stepsComponents: IstepsComponents = {
  0: FirstStep,
  1: SecondStep,
  2: ThirdStep,
};

interface IstepsComponents {
  [key: number]: FunctionComponent<IStep>;
}

const Cart = () => {
  const [step, setStep] = useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const onPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className={styles.cart}>
      <CartHeader activeNumber={step} />
      {/* <Empty /> */}
      <Step onNextStep={onNextStep} onPrevStep={onPrevStep} />
    </div>
  );
};

export default Cart;
