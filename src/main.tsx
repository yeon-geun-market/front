import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import worker from './mocks/browser';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

async function prepare() {
  if (import.meta.env.DEV) {
    if (worker) {
      return worker.start();
    }
  }
  return Promise.resolve();
}
const client = new QueryClient();
prepare().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <ReactQueryDevtools />
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
});
