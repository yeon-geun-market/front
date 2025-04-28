import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={'/'}>
        <section className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src='https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-8830-622f-b2ec-27fd91db38bc/raw?se=2025-04-28T17%3A13%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=b72e7809-47cd-54e9-a5eb-a786adcea80c&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-28T09%3A58%3A55Z&ske=2025-04-29T09%3A58%3A55Z&sks=b&skv=2024-08-04&sig=4WHpPLzh9Qvwgs8WW2sT8MrrXEiUTiudrQl1roXvTPo%3D'
          />
          <a className={styles.title}>연근 마켓</a>
        </section>
      </Link>

      <a className={styles.userProfile}>user profile</a>
    </div>
  );
};

export default Header;
