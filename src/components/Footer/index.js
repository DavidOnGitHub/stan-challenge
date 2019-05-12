import React from 'react';

import { ReactComponent as FacebookIcon } from '../../assets/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg';
import { ReactComponent as AppleStore } from '../../assets/app-store.svg';
import { ReactComponent as GoogleStore } from '../../assets/play-store.svg';
import { ReactComponent as WindowsStore } from '../../assets/windows-store.svg';
import styles from './Footer.module.scss';

const getSiteLinks = () =>
  [
    'Home',
    'Terms and Conditions',
    'Privacy Policy',
    'Collection Statement',
    'Help',
    'ManageAccount'
  ].map(link => (
    <div key={link} className={styles['site-link']}>
      {link}
    </div>
  ));

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles['site-map']}>{getSiteLinks()}</div>
    <div className={styles['copyright-and-links']}>
      <div className={styles['copyright']}>
        {`Copyright \u00A9 2019 DEMO Streaming. All Rights Reserved.`}
      </div>
      <div className={styles.links}>
        <div className={styles.socials}>
          <FacebookIcon className={styles['social-button']} />
          <TwitterIcon className={styles['social-button']} />
          <InstagramIcon className={styles['social-button']} />
        </div>
        <div className={styles.stores}>
          <AppleStore className={styles.store} />
          <GoogleStore className={styles.store} />
          <WindowsStore className={styles.store} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
