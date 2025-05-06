import styles from './WriteModal.module.scss';
function WriteModal() {
  return (
    <div className={styles.writeModalContainer}>
      <form className={styles.formContainer}>
        <label htmlFor='title'>제목</label>
        <input placeholder='제목' />
        <label htmlFor='cotent'>내용</label>
        <textarea placeholder='내용' />
      </form>
    </div>
  );
}

export default WriteModal;
