import { RootLayoutShell } from '@onedate/app-core';

import { createWebSupabaseClient } from '../src/lib/supabase';

export default function RootLayout() {
  return <RootLayoutShell createClient={createWebSupabaseClient} />;
}
