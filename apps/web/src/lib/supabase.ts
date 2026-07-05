import { createSupabaseClient, validateSupabaseEnv } from '@onedate/supabase';

export function createWebSupabaseClient() {
  const env = validateSupabaseEnv({
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
  });

  return createSupabaseClient(env.supabaseUrl, env.supabaseAnonKey);
}
