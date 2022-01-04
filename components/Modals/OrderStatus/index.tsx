import { FC, useRef, useState } from 'react';
import Portal from '../Portal';
import OrderInp from './OrderInp';
import OrderResult from './OrderResult';

import styles from './OrderStatus.module.scss';

interface IOrderStatus {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderStatus: FC<IOrderStatus> = ({ closeModal }) => {
  const [data, setData] = useState(false);

  const statusBgRef = useRef<HTMLDivElement>(null);

  const outsideClick = (e: any) => {
    if (e.target === statusBgRef.current) {
      closeModal(false);
    }
  };

  const getStatus = (orderNum: string) => {
    console.log(data);

    if (orderNum.length > 5) {
      setData(true);
    }
  };

  return (
    <Portal>
      <div className={styles.status__background} ref={statusBgRef} onClick={outsideClick}>
        <div className={styles.status}>
          <h2 className={styles.status__title}>Статус заказа</h2>
          <button className={styles.status__button} onClick={() => closeModal(false)}>
            <svg width="24" height="24" viewBox="4 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 7.5L23.4677 23.4677" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M7.5 23.4678L23.4677 7.50003"
                stroke="#14142B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {data ? <OrderResult /> : <OrderInp getStatus={getStatus} />}
        </div>
      </div>
    </Portal>
  );
};

export default OrderStatus;
