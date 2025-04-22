import { useQuery } from '@tanstack/react-query';
import getItemList from '../api/getItemList';

const useGetItemList = () => {
  return useQuery({
    queryKey: ['ItemList'],
    queryFn: getItemList,
  });
};

export default useGetItemList;
