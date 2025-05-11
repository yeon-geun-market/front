import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';
import { ListItemData } from './dummyData';
const ListItem = React.memo(function ListItem(itemData: ListItemData) {
  return (
    <div className={styles.listItemWrapper}>
      <Link to={`/items/${itemData.id}`}>
        <img src={itemData.imageUrl || ''} alt={itemData.title} />
        <div className={styles.listItemInfo}>
          <p>{itemData.title}</p>
          <p>{itemData.price.toLocaleString()}원</p>
        </div>
      </Link>
    </div>
  );
});

export default ListItem;
