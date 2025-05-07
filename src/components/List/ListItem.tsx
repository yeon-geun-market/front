import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';
import { ListItemData } from './dummyData';

function ListItem(itemData: ListItemData) {
  return (
    <div className={styles.listItemWrapper}>
      <Link to={`/items/${itemData.id}`}>
        <img src={itemData.imageUrl || ''} />
        <div className={styles.listIemInfo}>
          <p>{itemData.title}</p>
          <p>{itemData.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ListItem;
