import { useState } from 'react';
import styles from './WriteModal.module.scss';
import usePostItem from '../../hooks/usePostItem';
function WriteModal() {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };
  const { mutate } = usePostItem({
    title,
    content,
    price,
    imageUrl: images[0],
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    setTitle('');
    setContent('');
    setPrice(0);
    setImages([]);
  };
  return (
    <div className={styles.writeModalContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <label htmlFor='title'>제목</label>
          <input
            placeholder='제목'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formContent}>
          <label htmlFor='cotent'>추가 설명</label>
          <textarea
            placeholder='추가 설명'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className={styles.formFooter}>
          <div className={styles.priceContainer}>
            <input
              type='number'
              placeholder='가격'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <span>원</span>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageUploadArea}>
              {images.length === 0 ? (
                <div className={styles.noImage}>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    className={styles.fileInput}
                    id='imageUpload'
                  />
                  <label htmlFor='imageUpload' className={styles.uploadButton}>
                    <span>이미지 첨부</span>
                  </label>
                </div>
              ) : (
                <>
                  <div className={styles.imagePreview}>
                    {images?.map((image, index) => (
                      <div key={index} className={styles.previewItem}>
                        <img src={image} alt={`preview-${index}`} />
                        <button
                          onClick={() =>
                            setImages(images.filter((_, i) => i !== index))
                          }
                          className={styles.removeButton}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    className={styles.fileInput}
                    id='imageUpload'
                  />
                  <label htmlFor='imageUpload' className={styles.addMoreButton}>
                    <span>+</span>
                  </label>
                </>
              )}
            </div>
          </div>
          <button type='submit'>작성하기</button>
        </div>
      </form>
    </div>
  );
}

export default WriteModal;
