import { FC, useState, useRef, useEffect } from 'react';

import styles from './Expansion.module.scss';

interface IExpension {
  name: string;
  subscription: string;
}

const Expension: FC<IExpension> = ({ name, subscription }) => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const [active, setActive] = useState(false);

  return (
    <div className={styles.expension}>
      <div className={styles.expension__container}>
        <button onClick={() => setActive(!active)}>{active ? '-' : '+'}</button>
        <span>{name}</span>
      </div>
      {active && (
        <p
          ref={paragraphRef}
          className={styles.expension__subscription}
        >
          {subscription}
        </p>
      )}
      <hr />
    </div>
  );
};

export default Expension;
