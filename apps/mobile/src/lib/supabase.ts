import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

import type { Database } from '@onedate/supabase';
import { validateSupabaseEnv } from '@onedate/supabase';

export function createMobileSupabaseClient() {
  const env = validateSupabaseEnv({
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
  });

  return createClient<Database>(env.supabaseUrl, env.supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      detectSessionInUrl: false,
      persistSession: true,
      storage: AsyncStorage,
    },
  });
}
