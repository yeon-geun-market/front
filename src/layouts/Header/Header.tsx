import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={'/'}>
        <section className={styles.logoWrapper}>
          {/* <img className={styles.logo} src={'/logo.png'} /> */}
          <a className={styles.title}>연근 마켓</a>
        </section>
      </Link>

      <a className={styles.userProfile}>user profile</a>
    </div>
  );
};

export default Header;
