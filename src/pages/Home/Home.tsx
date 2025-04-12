import styles from './Home.module.scss';
import { Filter, Search, List } from '../../componets';

const Home = () => {
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.listContainer}>
        <div className={styles.filter}>
          <Filter />
        </div>
        <div className={styles.list}>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
