import { http, HttpResponse } from 'msw';
import { dummyItems } from '../componets/List/dummyData';

export const handlers = [
  http.get('/items', () => {
    return HttpResponse.json(dummyItems);
  }),
];
