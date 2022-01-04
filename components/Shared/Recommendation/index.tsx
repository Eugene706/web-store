import React from 'react';
import styles from './Recommendation.module.scss';

const Recommendation = () => {
  return (
    <div className={styles.recCard}>
      <span className={styles.recCard__name}>Silicone Case Full Cover iPhone 11</span>
      <span className={styles.recCard__quantity}>12 дизайнов</span>
    </div>
  );
};

export default Recommendation;
