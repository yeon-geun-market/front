import { useQuery } from '@tanstack/react-query';
import getItemDetail from '../api/getItemDetail';

const useGetItemDetail = (id: number) => {
  return useQuery({
    queryKey: ['ItemDetail', id],
    queryFn: () => getItemDetail(id),
  });
};

export default useGetItemDetail;
