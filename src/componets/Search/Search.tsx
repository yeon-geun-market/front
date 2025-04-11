import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.inputContainer}>
      <input />
      <button className={styles.searchButton}>검색</button>
    </div>
  );
};

export default Search;
