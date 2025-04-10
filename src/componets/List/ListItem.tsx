import React from 'react';
import styles from './ListItem.module.scss';
import { ListItemData } from './dummyData';
function ListItem(itemData: ListItemData) {
  return (
    <div className={styles.listItemWrapper}>
      <div>list Image Wrapper</div>
      <p>{itemData.title}</p>
      <p>{itemData.price}</p>
    </div>
  );
}

export default ListItem;
