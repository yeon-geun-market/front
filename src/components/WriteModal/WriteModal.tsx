import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './WriteModal.module.scss';
import usePostItem from '../../hooks/usePostItem';

type FormData = {
  title: string;
  content: string;
  price: number;
  imageUrl?: string;
};

function WriteModal({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const [images, setImages] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: '',
      content: '',
      price: 0,
    },
  });

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

  const { mutate } = usePostItem();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.title === '' || data.content === '') {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    mutate({
      ...data,
      imageUrl: images[0],
    });
    setImages([]);
    setIsOpen(false);
  };

  return (
    <div
      className={styles.writeModalContainer}
      onClick={() => setIsOpen(false)}
    >
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.inputGroup}>
          <input
            {...register('title')}
            type='text'
            id='title'
            className={styles.inputField}
            placeholder=' '
            required
          />
          <label htmlFor='title' className={styles.floatingLabel}>
            제목
          </label>
        </div>

        <div className={styles.formContent}>
          <label htmlFor='content'>추가 설명</label>
          <textarea
            {...register('content')}
            placeholder=''
            className={styles.inputField}
          />
        </div>

        <div className={styles.formFooter}>
          <div className={styles.priceContainer}>
            <input
              {...register('price', { valueAsNumber: true })}
              type='number'
              min={0}
              placeholder='가격'
            />
            <span>원</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageUploadArea}>
            {images.length === 0 ? (
              <div className={styles.noImage}>
                <input
                  {...register('imageUrl')}
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
        <div className={styles.formFooter}>
          <button type='submit' className={styles.submitButton}>
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteModal;
