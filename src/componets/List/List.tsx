import React from 'react';
import ListItem from './ListItem';
import { dummyItems } from './dummyData';
import { ListItemData } from './dummyData';
import styles from './List.module.scss';
//TODO: 여기서 정렬 및 반응형 넣기
function List() {
  return (
    <div className={styles.listContainer}>
      {dummyItems.map((item: ListItemData) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default List;
