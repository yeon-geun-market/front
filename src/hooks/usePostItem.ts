import { useMutation } from '@tanstack/react-query';
import postItem, { Item } from '../api/postItem';

export default function usePostItem(item: Item) {
  return useMutation({
    mutationFn: () => postItem(item),
  });
}
