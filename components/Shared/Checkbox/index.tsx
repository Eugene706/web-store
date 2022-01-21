import { useState } from 'react';

import styles from './Checkbox.module.scss';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className={styles.checkbox}>
      <input className={styles.checkbox__hiden} type="checkbox" />
      <div className={styles.checkbox__custom}>
        <svg
          className={styles.checkbox__checkmark}
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.32332 10.3615L0.912608 5.95074C0.64762 5.68576 0.64762 5.25611 0.912608 4.9911L1.87223 4.03145C2.13722 3.76643 2.56689 3.76643 2.83188 4.03145L5.80315 7.00269L12.1673 0.63859C12.4323 0.373603 12.8619 0.373603 13.1269 0.63859L14.0865 1.59824C14.3515 1.86323 14.3515 2.29287 14.0865 2.55789L6.28297 10.3615C6.01796 10.6265 5.58831 10.6265 5.32332 10.3615Z"
            fill="white"
          />
        </svg>
      </div>
      Brend 01
    </label>
  );
};

export default Checkbox;
