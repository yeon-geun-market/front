import { useState } from 'react';
import styles from './Home.module.scss';

import { Filter, Search, List, WriteModal } from '../../components';

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={styles.container}>
      {isOpen && <WriteModal />}
      <Search />
      <div className={styles.listContainer}>
        <button className={styles.filterButton} onClick={toggleFilter}>
          필터
        </button>
        <div className={styles.filter}>
          <Filter />
        </div>
        <div className={styles.list}>
          <List />
        </div>
      </div>

      {showFilter && (
        <div className={styles.mobileFilter}>
          <div className={styles.mobileFilterHeader}>
            <h3>필터</h3>
            <button onClick={toggleFilter}>닫기</button>
          </div>
          <Filter />
        </div>
      )}
      <button
        className={styles.writeButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        글쓰기
      </button>
    </div>
  );
};

export default Home;
