import { useState } from 'react';
import { Range } from 'rc-slider';

import styles from './CategoryList.module.scss';
import 'rc-slider/assets/index.css';
import CategoryItems from './CategoryItems';

const CategoryList = () => {
  const [price, setPrice] = useState([0, 300]);
  const [visiplePrice, setVisiplePrice] = useState(false);

  console.log(price);

  return (
    <div className={styles.categoryList}>
      <div className={styles.categoryList__item}>
        <div className={styles.item__name} onClick={() => setVisiplePrice(!visiplePrice)}>
          <span>Цена в $</span>
          <svg
            className={visiplePrice ? styles.rotated : ''}
            width="7.42"
            height="12.2"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.71299 7L1.70199 0.99L0.287994 2.404L4.88799 7.004L0.287994 11.597L1.70199 13.011L7.71299 7Z" />
          </svg>
        </div>
        {visiplePrice && (
          <div className={styles.item__options}>
            <div>
              <input type="number" className={styles.item__inp} />
              <span>-</span>
              <input type="number" className={styles.item__inp} />
            </div>
            <Range
              railStyle={{
                borderRadius: 0,
              }}
              trackStyle={[
                {
                  background: '#76A9FF',
                },
              ]}
              handleStyle={[
                {
                  height: 11,
                  width: 11,
                  marginTop: '-1px',
                  backgroundColor: '#76A9FF',
                  border: 0,
                },
                {
                  height: 11,
                  width: 11,
                  marginTop: '-1px',
                  backgroundColor: '#76A9FF',
                  border: 0,
                },
              ]}
              value={price}
              onChange={(val) => setPrice(val)}
              pushable={true}
              min={0}
              max={500}
              defaultValue={[0, 300]}
            />
          </div>
        )}
      </div>
      <CategoryItems />
    </div>
  );
};

export default CategoryList;
