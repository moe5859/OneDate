import { Redirect, Slot } from 'expo-router';

import { ROUTES } from '@onedate/config';
import { LoadingState, Screen } from '@onedate/ui';

import { useAuth } from '../providers/auth-provider';

export function AuthGateLayout() {
  const { status } = useAuth();

  if (status === 'loading') {
    return (
      <Screen scroll={false}>
        <LoadingState message="Restoring your session..." />
      </Screen>
    );
  }

  if (status === 'authenticated') {
    return <Redirect href={ROUTES.home} />;
  }

  return <Slot />;
}
