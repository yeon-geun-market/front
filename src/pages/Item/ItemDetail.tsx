import { useParams } from 'react-router-dom';
import useGetItemDetail from '../../hooks/useGetItemDetail';
import styles from './Item.module.scss';

const ItemDetail = () => {
  const { id } = useParams();
  const { data: ItemData } = useGetItemDetail(Number(id));
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img className={styles.imageContainer} src={ItemData?.imageUrl} />
        <div className={styles.itemInfoContainer}>
          <h1>{ItemData?.title}</h1>
          <span>작성자 정보</span>
          <div className={styles.detailInfo}>
            <p>올린 시간</p>
            <p className={styles.price}>
              {ItemData?.price?.toLocaleString()}원
            </p>
            <p className={styles.description}>상품 설명</p>
          </div>

          <button>판매자와 채팅하기</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
