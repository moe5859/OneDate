import { QueryClientProvider } from '@tanstack/react-query';
import { useState, type PropsWithChildren } from 'react';

import type { OneDateSupabaseClient } from '@onedate/supabase';
import { ThemeProvider } from '@onedate/theme';

import { createAppQueryClient } from '../lib/query-client';
import { AuthProvider } from './auth-provider';

export function AppProviders({
  children,
  client,
}: PropsWithChildren<{ client: OneDateSupabaseClient }>) {
  const [queryClient] = useState(() => createAppQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider client={client}>{children}</AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
