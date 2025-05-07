import Instance from './Instance';
export interface Item {
  title: string;
  content: string;
  price: number;
  imageUrl?: string;
}
export default async function postItem(item: Item) {
  try {
    const res = await Instance.post('/items', item);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
