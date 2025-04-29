import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '/public/logo.png';
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={'/'}>
        <section className={styles.logoWrapper}>
          <img className={styles.logo} src={logo} />
          <a className={styles.title}>연근 마켓</a>
        </section>
      </Link>

      <a className={styles.userProfile}>user profile</a>
    </div>
  );
};

export default Header;
