import { RootLayoutShell } from '@onedate/app-core';

import { createMobileSupabaseClient } from '../src/lib/supabase';

export default function RootLayout() {
  return <RootLayoutShell createClient={createMobileSupabaseClient} />;
}
