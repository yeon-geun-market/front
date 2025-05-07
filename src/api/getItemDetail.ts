import Instance from './Instance';
import { AxiosError } from 'axios';

const getItemDetail = async (id: number) => {
  try {
    const res = await Instance.get(`/items/${id}`);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error('알 수 없는 에러가 발생했습니다.');
  }
};
export default getItemDetail;
