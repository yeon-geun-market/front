import { http, HttpResponse } from 'msw';
import { dummyItems, ListItemData } from '../components/List/dummyData';

export const handlers = [
  http.get('/items', () => {
    return HttpResponse.json(dummyItems);
  }),
  http.get('/items/:id', ({ params }) => {
    const { id } = params;
    const item = dummyItems.find(
      (item: ListItemData) => item.id === Number(id)
    );

    if (!item) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(item);
  }),
];
