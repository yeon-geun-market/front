import { useMutation } from '@tanstack/react-query';
import postItem, { Item } from '../api/postItem';

export default function usePostItem() {
  return useMutation({
    mutationFn: (item: Item) => postItem(item),
  });
}
