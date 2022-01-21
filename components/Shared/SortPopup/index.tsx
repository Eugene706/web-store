import { useRef, useState } from 'react';

import styles from './SortPopup.module.scss';

const PopupObj = ['По умолчанию', '$ - $$', '$$ - $'];

const SortPopup = () => {
  const sortRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectItem, setSelectItem] = useState('По умолчанию');

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sort__label} onClick={() => setVisiblePopup(!visiblePopup)}>
        <span>{selectItem}</span>
        <svg width="6.19" height="10.2" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
        </svg>
      </div>
      {visiblePopup && (
        <div className={styles.sort__popup}>
          <ul>
            {PopupObj.map((item, index) => (
              <li
                onClick={() => {
                  setSelectItem(item);
                  console.log(item);

                  console.log(selectItem);
                }}
                className={selectItem == item ? styles.sort__popup_active : ''}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
