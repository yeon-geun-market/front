export interface ListItemData {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
}

export const dummyItems: ListItemData[] = [
  {
    id: 1,
    title: '신선한 제철 과일 세트',
    price: 25000,
    imageUrl: 'https://example.com/fruits.jpg',
  },
  {
    id: 2,
    title: '전통 장아찌 1kg',
    price: 15000,
    imageUrl: 'https://example.com/jangajji.jpg',
  },
  {
    id: 3,
    title: '수제 고추장 500g',
    price: 8000,
    imageUrl: 'https://example.com/gochujang.jpg',
  },
  {
    id: 4,
    title: '신선한 채소 세트',
    price: 20000,
    imageUrl: 'https://example.com/vegetables.jpg',
  },
  {
    id: 5,
    title: '전통 된장 1kg',
    price: 12000,
    imageUrl: 'https://example.com/doenjang.jpg',
  },
  {
    id: 6,
    title: '수제 김치 2kg',
    price: 18000,
    imageUrl: 'https://example.com/kimchi.jpg',
  },
  {
    id: 7,
    title: '신선한 해산물 세트',
    price: 35000,
    imageUrl: 'https://example.com/seafood.jpg',
  },
  {
    id: 8,
    title: '전통 떡 세트',
    price: 22000,
    imageUrl: 'https://example.com/ricecake.jpg',
  },
];
