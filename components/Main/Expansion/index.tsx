import { FC, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

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
      {/* {active && ( */}
      <Transition in={active} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <p ref={paragraphRef} className={`${styles.expension__subscription} ${state}_sub`}>
            {subscription}
          </p>
        )}
      </Transition>
      {/* )} */}
      <hr />
    </div>
  );
};

export default Expension;
