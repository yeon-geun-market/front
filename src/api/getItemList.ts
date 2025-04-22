import Instance from './Instance';
import { AxiosError } from 'axios';

const getItemList = async () => {
  try {
    const res = await Instance.get('/items');
    console.log(res);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error('알 수 없는 에러가 발생했습니다.');
  }
};
export default getItemList;
