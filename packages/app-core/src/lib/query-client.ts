import { QueryClient } from '@tanstack/react-query';

export function createAppQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 30,
      },
    },
  });
}
