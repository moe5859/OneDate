export type SupabaseEnv = {
  supabaseAnonKey: string;
  supabaseUrl: string;
};

export function validateSupabaseEnv(env: {
  supabaseAnonKey?: string | undefined;
  supabaseUrl?: string | undefined;
}): SupabaseEnv {
  if (!env.supabaseUrl || !env.supabaseAnonKey) {
    throw new Error(
      'Missing Supabase environment variables. Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY.',
    );
  }

  return {
    supabaseAnonKey: env.supabaseAnonKey,
    supabaseUrl: env.supabaseUrl,
  };
}
