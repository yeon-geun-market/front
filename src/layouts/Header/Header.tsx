import React from 'react';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.title}>연근 마켓</a>
      <a className={styles.userProfile}>user profile</a>
    </div>
  );
};

export default Header;
