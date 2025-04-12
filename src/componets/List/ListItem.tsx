import styles from './ListItem.module.scss';
import { ListItemData } from './dummyData';
function ListItem(itemData: ListItemData) {
  return (
    <div className={styles.listItemWrapper}>
      <img src={itemData.imageUrl || ''} />
      <p>{itemData.title}</p>
      <p>{itemData.price}</p>
    </div>
  );
}

export default ListItem;
