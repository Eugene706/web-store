import React, { FC } from 'react';

import styles from './Button.module.scss';

interface IButton {
  inscription: string;
  orientation?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButton> = ({ inscription, orientation, onClick }) => {
  return (
    <button className={`${styles.button} ${orientation ? styles.button_right : ''}`} onClick={onClick}>
      <svg
        style={{ transform: orientation ? 'rotate(0deg)' : '' }}
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
      </svg>
      {inscription}
    </button>
  );
};

export default Button;
