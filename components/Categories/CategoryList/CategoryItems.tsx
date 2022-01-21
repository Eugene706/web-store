import Checkbox from 'components/Shared/Checkbox';
import { useState } from 'react';

import styles from './CategoryList.module.scss';

const CategoryItems = () => {
  const [visipleOption, setVisipleOption] = useState(false);

  return (
    <div className={styles.categoryList__item}>
      <div className={styles.item__name} onClick={() => setVisipleOption(!visipleOption)}>
        <span>Бренд</span>
        <svg
          className={visipleOption ? styles.rotated : ''}
          width="7.42"
          height="12.2"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </div>

      {visipleOption && (
        <ul className={styles.item__options}>
          <li>
            <Checkbox />
          </li>
          <li>
            <Checkbox />
          </li>
          <li>
            <Checkbox />
          </li>
        </ul>
      )}
    </div>
  );
};

export default CategoryItems;
