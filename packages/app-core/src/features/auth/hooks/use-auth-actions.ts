import { useRouter } from 'expo-router';
import { useState } from 'react';

import { ROUTES } from '@onedate/config';
import { formatAuthError } from '@onedate/utils';

import { useAuth } from '../../../providers/auth-provider';

export function useAuthActions() {
  const router = useRouter();
  const { authService } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function withPending(task: () => Promise<void>) {
    try {
      setError(null);
      setIsPending(true);
      await task();
    } catch (nextError) {
      setError(formatAuthError(nextError as { message?: string }));
    } finally {
      setIsPending(false);
    }
  }

  return {
    error,
    isPending,
    resetPassword: async (email: string) => {
      await withPending(async () => {
        await authService.resetPassword(email);
      });
    },
    signIn: async (email: string, password: string) => {
      await withPending(async () => {
        await authService.signIn(email, password);
        router.replace(ROUTES.home);
      });
    },
    signOut: async () => {
      await withPending(async () => {
        await authService.signOut();
        router.replace(ROUTES.auth);
      });
    },
    signUp: async (email: string, password: string) => {
      await withPending(async () => {
        await authService.signUp(email, password);
        router.replace(ROUTES.signIn);
      });
    },
  };
}
