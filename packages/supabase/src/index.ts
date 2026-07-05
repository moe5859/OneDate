import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export type Database = {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          display_name: string | null;
          avatar_url: string | null;
          city: string | null;
          country: string | null;
          birth_year: number | null;
          preferred_language: string | null;
          onboarding_completed: boolean;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          city?: string | null;
          country?: string | null;
          birth_year?: number | null;
          preferred_language?: string | null;
          onboarding_completed?: boolean;
          created_at?: string;
          updated_at?: string;
          deleted_at?: string | null;
        };
        Update: Partial<Database['public']['Tables']['user_profiles']['Insert']>;
      };
    };
  };
};

export type OneDateSupabaseClient = SupabaseClient<Database>;

export function createSupabaseClient(url: string, anonKey: string): OneDateSupabaseClient {
  return createClient<Database>(url, anonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });
}

export * from './auth';
export * from './env';
