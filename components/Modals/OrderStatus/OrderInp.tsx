import { FC, useState } from 'react';

import Button from 'components/Shared/Button';
import styles from './OrderStatus.module.scss';

interface IOrderInp {
  getStatus: (orderNum: string) => void;
}

const OrderInp: FC<IOrderInp> = ({ getStatus }) => {
  const [inpVal, setInpVal] = useState('');

  return (
    <>
      <div className={styles.status__inputBlock}>
        <h5>Номер заказа</h5>
        <input type="text" onChange={(e) => setInpVal(e.target.value)} />
        <samp style={{ opacity: 0 }} className={styles.status__error}>
          заказ не найден
        </samp>
      </div>
      <Button inscription="Найти заказ" orientation={true} onClick={() => getStatus(inpVal)} />
    </>
  );
};

export default OrderInp;
