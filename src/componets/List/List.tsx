import ListItem from './ListItem';

import { ListItemData } from './dummyData';
import styles from './List.module.scss';
import useGetItemList from '../../hooks/useGetItemList';

//TODO: 여기서 정렬 및 반응형 넣기
function List() {
  const { data: ItemList } = useGetItemList();
  return (
    <div className={styles.listContainer}>
      {ItemList?.map((item: ListItemData) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default List;
