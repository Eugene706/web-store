import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__categories}>
        <h2>Основные категории</h2>
        <span>Apple</span>
        <span>Samsung</span>
        <span>Xiaomi</span>
        <span>Чехлы</span>
        <span>Стекла</span>
      </div>

      <div className={styles.footer__contacts}>
        <h2>Контакты</h2>
        <span>г. Киев</span>
        <span>ул. Ашоакто 9</span>
        <span>+380679786641</span>
        <span>Telegram: @sitename</span>
      </div>

      <div className={styles.footer__sitename}>
        <h2>Shopname</h2>
        <span>© 2020 Sitename</span>
      </div>
    </footer>
  );
};

export default Footer;
