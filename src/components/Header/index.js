import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <a href="/" className={styles['site-name']}>
      DEMO Streaming
    </a>
    <div className={styles['actions']}>
      <button className={styles['login-button']}>Log in</button>
      <button className={styles['trial-button']}>Start your free trial</button>
    </div>
  </header>
);

export default Header;
