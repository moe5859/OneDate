import type { Session } from '@supabase/supabase-js';

import type { OneDateSupabaseClient } from '.';

export class AuthService {
  constructor(private readonly client: OneDateSupabaseClient) {}

  async getSession(): Promise<Session | null> {
    const { data, error } = await this.client.auth.getSession();

    if (error) {
      throw error;
    }

    return data.session;
  }

  async signIn(email: string, password: string): Promise<Session> {
    const { data, error } = await this.client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    if (!data.session) {
      throw new Error('No session returned after sign in.');
    }

    return data.session;
  }

  async signUp(email: string, password: string): Promise<void> {
    const { error } = await this.client.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  }

  async resetPassword(email: string): Promise<void> {
    const { error } = await this.client.auth.resetPasswordForEmail(email);

    if (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {
    const { error } = await this.client.auth.signOut();

    if (error) {
      throw error;
    }
  }
}
