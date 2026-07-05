import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import type { Session } from '@supabase/supabase-js';

import { AuthService, type OneDateSupabaseClient } from '@onedate/supabase';

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

type AuthContextValue = {
  authService: AuthService;
  session: Session | null;
  status: AuthStatus;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({
  children,
  client,
}: PropsWithChildren<{ client: OneDateSupabaseClient }>) {
  const authService = useMemo(() => new AuthService(client), [client]);
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');

  useEffect(() => {
    let active = true;

    async function loadSession() {
      try {
        const currentSession = await authService.getSession();

        if (!active) {
          return;
        }

        setSession(currentSession);
        setStatus(currentSession ? 'authenticated' : 'unauthenticated');
      } catch {
        if (!active) {
          return;
        }

        setSession(null);
        setStatus('unauthenticated');
      }
    }

    void loadSession();

    const { data } = client.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setStatus(nextSession ? 'authenticated' : 'unauthenticated');
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, [authService, client]);

  return (
    <AuthContext.Provider value={{ authService, session, status }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider.');
  }

  return context;
}
